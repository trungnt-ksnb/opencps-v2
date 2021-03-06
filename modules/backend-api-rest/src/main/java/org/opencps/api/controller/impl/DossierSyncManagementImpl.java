package org.opencps.api.controller.impl;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Base64;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;

import org.opencps.api.controller.DossierSyncManagement;
import org.opencps.api.controller.exception.ErrorMsg;
import org.opencps.api.controller.util.DossierSyncUtils;
import org.opencps.api.dossiersync.model.DossierSyncResultsModel;
import org.opencps.api.dossiersync.model.DossierSyncSendingModel;
import org.opencps.auth.api.BackendAuth;
import org.opencps.auth.api.BackendAuthImpl;
import org.opencps.auth.api.exception.NotFoundException;
import org.opencps.auth.api.exception.UnauthenticationException;
import org.opencps.auth.api.exception.UnauthorizationException;
import org.opencps.auth.api.keys.ActionKeys;
import org.opencps.dossiermgt.constants.DossierTerm;
import org.opencps.dossiermgt.model.Dossier;
import org.opencps.dossiermgt.model.DossierAction;
import org.opencps.dossiermgt.model.DossierFile;
import org.opencps.dossiermgt.model.DossierSync;
import org.opencps.dossiermgt.model.DossierTemplate;
import org.opencps.dossiermgt.model.ProcessAction;
import org.opencps.dossiermgt.model.ProcessStep;
import org.opencps.dossiermgt.scheduler.InvokeREST;
import org.opencps.dossiermgt.scheduler.RESTFulConfiguration;
import org.opencps.dossiermgt.service.DossierActionLocalServiceUtil;
import org.opencps.dossiermgt.service.DossierFileLocalServiceUtil;
import org.opencps.dossiermgt.service.DossierLocalServiceUtil;
import org.opencps.dossiermgt.service.DossierSyncLocalServiceUtil;
import org.opencps.dossiermgt.service.ProcessActionLocalServiceUtil;
import org.opencps.dossiermgt.service.ProcessStepLocalServiceUtil;

import com.liferay.document.library.kernel.model.DLFileVersion;
import com.liferay.document.library.kernel.service.DLAppLocalServiceUtil;
import com.liferay.document.library.kernel.service.DLFileEntryLocalServiceUtil;
import com.liferay.document.library.kernel.service.DLFileVersionLocalServiceUtil;
import com.liferay.portal.kernel.dao.orm.QueryUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.model.Company;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.repository.model.FileEntry;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.servlet.HttpMethods;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.StringPool;
import com.liferay.portal.kernel.util.Validator;

public class DossierSyncManagementImpl implements DossierSyncManagement {
	private final String baseUrl = "http://localhost:8080/o/rest/v2/";
	private final String username = "test@liferay.com";
	private final String password = "test";
	private final String serectKey = "OPENCPSV2";

	@Override
	public Response getDossierSyncs(HttpServletRequest request, HttpHeaders header, Company company, Locale locale,
			User user, ServiceContext serviceContext, String serverNo) {

		BackendAuth auth = new BackendAuthImpl();

		try {
			if (!auth.isAuth(serviceContext)) {
				throw new UnauthenticationException();
			}

			if (!auth.hasResource(serviceContext, DossierTemplate.class.getName(), ActionKeys.ADD_ENTRY)) {
				throw new UnauthorizationException();
			}

			List<DossierSync> dossierSyncs = DossierSyncLocalServiceUtil.fetchByServerNo(serverNo, QueryUtil.ALL_POS,
					QueryUtil.ALL_POS);

			DossierSyncResultsModel result = new DossierSyncResultsModel();

			result.setTotal(dossierSyncs.size());
			result.getData().addAll(DossierSyncUtils.mappingToData(dossierSyncs));

			return Response.status(200).entity(result).build();

		} catch (Exception e) {
			ErrorMsg error = new ErrorMsg();

			if (e instanceof UnauthenticationException) {
				error.setMessage("Non-Authoritative Information.");
				error.setCode(HttpURLConnection.HTTP_NOT_AUTHORITATIVE);
				error.setDescription("Non-Authoritative Information.");

				return Response.status(HttpURLConnection.HTTP_NOT_AUTHORITATIVE).entity(error).build();
			} else {
				if (e instanceof UnauthorizationException) {
					error.setMessage("Unauthorized.");
					error.setCode(HttpURLConnection.HTTP_NOT_AUTHORITATIVE);
					error.setDescription("Unauthorized.");

					return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).entity(error).build();

				} else {

					error.setMessage("Internal Server Error");
					error.setCode(HttpURLConnection.HTTP_FORBIDDEN);
					error.setDescription(e.getMessage());

					return Response.status(HttpURLConnection.HTTP_INTERNAL_ERROR).entity(error).build();

				}
			}
		}
	}

	@Override
	public Response sendDossierSync(HttpServletRequest request, HttpHeaders header, Company company, Locale locale,
			User user, ServiceContext serviceContext, long id) {

		BackendAuth auth = new BackendAuthImpl();

		long groupId = GetterUtil.getLong(header.getHeaderString("groupId"));

		try {

			if (!auth.isAuth(serviceContext)) {
				throw new UnauthenticationException();
			}

			DossierSync dossierSync = DossierSyncLocalServiceUtil.fetchDossierSync(id);

			DossierSyncSendingModel result = new DossierSyncSendingModel();

			if (Validator.isNotNull(dossierSync)) {
				// Get DOSSIER in CLIENT
				Dossier dossier = DossierLocalServiceUtil.fetchDossier(dossierSync.getDossierId());
				
				// Get the latest ACTION of DOSSIER has been done
				long dossierActionId = Validator.isNotNull(dossier) ? dossierActionId = dossier.getDossierActionId()
						: 0l;

				if (dossierActionId != 0) {

					DossierAction action = DossierActionLocalServiceUtil.fetchDossierAction(dossierActionId);
					if (Validator.isNotNull(action)) {

						callDossierSync(groupId, dossierSync.getMethod(), action.getSyncActionCode(),
								action.getActionUser(), action.getActionNote(), 0l, dossier.getReferenceUid(),
								dossierActionId, id, dossierSync.getDossierId(), dossierSync.getClassPK(),
								dossierSync.getCreateDossier(), serviceContext);

					} else {
						throw new NotFoundException("DossierActionNotFound");
					}
				}

				result = DossierSyncUtils.mappingToSending(dossierSync);

			} else {
				throw new NotFoundException("NotFoundDossierSync");
			}

			return Response.status(200).entity(result).build();

		} catch (Exception e) {
			ErrorMsg error = new ErrorMsg();

			if (e instanceof UnauthenticationException) {
				error.setMessage("Non-Authoritative Information.");
				error.setCode(HttpURLConnection.HTTP_NOT_AUTHORITATIVE);
				error.setDescription("Non-Authoritative Information.");

				return Response.status(HttpURLConnection.HTTP_NOT_AUTHORITATIVE).entity(error).build();
			} else {
				if (e instanceof UnauthorizationException) {
					error.setMessage("Unauthorized.");
					error.setCode(HttpURLConnection.HTTP_NOT_AUTHORITATIVE);
					error.setDescription("Unauthorized.");

					return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).entity(error).build();

				} else {

					error.setMessage("Internal Server Error");
					error.setCode(HttpURLConnection.HTTP_FORBIDDEN);
					error.setDescription(e.getMessage());

					return Response.status(HttpURLConnection.HTTP_INTERNAL_ERROR).entity(error).build();

				}
			}
		}

	}

	private void callDossierSync(long groupId, int method, String actionCode, String actionUser, String actionNote,
			long assignUserId, String refId, long clientDossierActionId, long dossierSyncId, long dossierId,
			long classPK, boolean isCreateDossier, ServiceContext serviceContext) throws PortalException {

		InvokeREST rest = new InvokeREST();

		HashMap<String, String> properties = new HashMap<String, String>();

		if (isCreateDossier) {
			// Call initDossier to SERVER

			String httpMethod = HttpMethods.POST;

			String endPoint = "dossiers";

			Map<String, Object> params = getParamsPostDossier(dossierSyncId);

			JSONObject resPostDossier = rest.callPostAPI(groupId, httpMethod, "application/json",
					RESTFulConfiguration.SERVER_PATH_BASE, endPoint, RESTFulConfiguration.SERVER_USER,
					RESTFulConfiguration.SERVER_PASS, properties, params, serviceContext);

			// reset creaetDossier flag
			if (resPostDossier.getInt(RESTFulConfiguration.STATUS) == HttpURLConnection.HTTP_OK) {
				DossierSyncLocalServiceUtil.shiftCreateDossierStatus(dossierSyncId);
			}

		}

		// SyncAction

		if (method == 0) {
			String endPointSynAction = "dossiers/" + refId + "/actions";

			Map<String, Object> params = new LinkedHashMap<>();
			params.put("actionCode", actionCode);
			params.put("actionUser", actionUser);
			params.put("actionNote", actionNote);
			params.put("assignUserId", assignUserId);
			params.put("isSynAction", 1);

			JSONObject resSynsActions = rest.callPostAPI(groupId, HttpMethods.POST, "application/json",
					RESTFulConfiguration.SERVER_PATH_BASE, endPointSynAction, RESTFulConfiguration.SERVER_USER,
					RESTFulConfiguration.SERVER_PASS, properties, params, serviceContext);

			if (resSynsActions.getInt(RESTFulConfiguration.STATUS) == HttpURLConnection.HTTP_OK) {
				// remove DossierSync
				DossierSyncLocalServiceUtil.deleteDossierSync(dossierSyncId);

			}

		}

		// SyncDossierFile
		if (method == 1) {

			// TODO add case update file
			String endPointSyncDossierFile = "dossiers/" + refId + "/files";

			DossierFile dossierFile = DossierFileLocalServiceUtil.getDossierFile(classPK);

			properties.put("referenceUid", dossierFile.getReferenceUid());
			properties.put("dossierTemplateNo", dossierFile.getDossierTemplateNo());
			properties.put("dossierPartNo", dossierFile.getDossierPartNo());
			properties.put("fileTemplateNo", dossierFile.getFileTemplateNo());
			properties.put("displayName", dossierFile.getDisplayName());
			properties.put("isSync", StringPool.TRUE);

			FileEntry fileEntry = DLAppLocalServiceUtil.getFileEntry(dossierFile.getFileEntryId());

			properties.put("fileType", fileEntry.getExtension());

			DLFileVersion dlFileVersion = DLFileVersionLocalServiceUtil.getLatestFileVersion(fileEntry.getFileEntryId(),
					true);

			File file = DLFileEntryLocalServiceUtil.getFile(dossierFile.getFileEntryId(), dlFileVersion.getVersion(), false);

			JSONObject resSynFile = rest.callPostFileAPI(groupId, HttpMethods.POST, "application/json", RESTFulConfiguration.SERVER_PATH_BASE,
					endPointSyncDossierFile, RESTFulConfiguration.SERVER_USER, RESTFulConfiguration.SERVER_PASS,
					properties, file, serviceContext);
			
			if (resSynFile.getInt(RESTFulConfiguration.STATUS) == HttpURLConnection.HTTP_OK) {
				// remove DossierSync
				DossierSyncLocalServiceUtil.deleteDossierSync(dossierSyncId);
				
				//Reset isNew
				
				dossierFile.setIsNew(false);
				DossierFileLocalServiceUtil.updateDossierFile(dossierFile);

			}


		}

		// SyncPaymentFile and paymentfile status
		if (method == 2 || method == 3) {

		}

		// remove pending in DossierAction
		int countDossierSync = DossierSyncLocalServiceUtil.countByGroupDossierId(groupId, dossierId);
		
		_log.info("COUNT_DOSSIER_SYNC = " + countDossierSync);
		
		if (countDossierSync == 0) {
			DossierActionLocalServiceUtil.updatePending(clientDossierActionId, false);
		}

	}

	private Map<String, Object> getParamsPostDossier(long dossierSyncId) throws PortalException {

		Map<String, Object> params = new HashMap<String, Object>();

		try {

			long dossierId = DossierSyncLocalServiceUtil.getDossierSync(dossierSyncId).getDossierId();

			Dossier dossier = DossierLocalServiceUtil.getDossier(dossierId);
			params.put(DossierTerm.REFERENCE_UID, dossier.getReferenceUid());
			params.put(DossierTerm.SERVICE_CODE, dossier.getServiceCode());
			params.put(DossierTerm.GOV_AGENCY_CODE, dossier.getGovAgencyCode());

			params.put(DossierTerm.DOSSIER_TEMPLATE_NO, dossier.getDossierTemplateNo());
			params.put(DossierTerm.APPLICANT_NAME, dossier.getApplicantName());
			params.put(DossierTerm.APPLICANT_ID_TYPE, dossier.getApplicantIdType());
			params.put(DossierTerm.APPLICANT_ID_NO, dossier.getApplicantIdNo());
			params.put(DossierTerm.APPLICANT_ID_DATE, dossier.getApplicantIdDate());
			params.put(DossierTerm.ADDRESS, dossier.getAddress());
			params.put(DossierTerm.CITY_CODE, dossier.getCityCode());
			params.put(DossierTerm.DISTRICT_CODE, dossier.getDistrictCode());
			params.put(DossierTerm.WARD_CODE, dossier.getWardCode());
			params.put(DossierTerm.CONTACT_NAME, dossier.getContactName());
			params.put(DossierTerm.CONTACT_TEL_NO, dossier.getContactTelNo());
			params.put(DossierTerm.CONTACT_EMAIL, dossier.getContactEmail());
			params.put(DossierTerm.PASSWORD, dossier.getPassword());
			params.put(DossierTerm.ONLINE, dossier.getOnline());
			params.put(DossierTerm.NOTIFICATION, dossier.getNotification());
			params.put(DossierTerm.APPLICANT_NOTE, dossier.getApplicantNote());
			params.put(DossierTerm.VIA_POSTAL, dossier.getViaPostal());
			params.put(DossierTerm.POSTAL_ADDRESS, dossier.getPostalAddress());
			params.put(DossierTerm.POSTAL_CITY_CODE, dossier.getPostalCityCode());
			params.put(DossierTerm.POSTAL_TEL_NO, dossier.getPostalTelNo());
		} catch (Exception e) {
			throw new PortalException("DossierNotFound");
		}

		return params;
	}
	
	@Deprecated
	private void doSync(long groupId, String actionCode, String actionUser, String actionNote, long assignUserId,
			String refId, long clientDossierActionId, long dossierSyncId) {
		try {
			String path = "dossiers/" + refId + "/actions";
			URL url = new URL(baseUrl + path);

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();

			String authString = username + ":" + password;

			String authStringEnc = new String(Base64.getEncoder().encodeToString(authString.getBytes()));
			conn.setRequestProperty("Authorization", "Basic " + authStringEnc);

			conn.setRequestMethod(HttpMethods.POST);
			conn.setDoInput(true);
			conn.setDoOutput(true);
			conn.setRequestProperty("Accept", "application/json");
			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			conn.setRequestProperty("groupId", String.valueOf(groupId));

			Map<String, Object> params = new LinkedHashMap<>();
			params.put("actionCode", actionCode);
			params.put("actionUser", actionUser);
			params.put("actionNote", actionNote);
			params.put("assignUserId", assignUserId);
			params.put("isSynAction", 1);

			StringBuilder postData = new StringBuilder();
			for (Map.Entry<String, Object> param : params.entrySet()) {
				if (postData.length() != 0)
					postData.append('&');
				postData.append(java.net.URLEncoder.encode(param.getKey(), "UTF-8"));
				postData.append('=');
				postData.append(java.net.URLEncoder.encode(String.valueOf(param.getValue()), "UTF-8"));
			}

			byte[] postDataBytes = postData.toString().getBytes("UTF-8");

			conn.setRequestProperty("Content-Length", String.valueOf(postDataBytes.length));

			conn.getOutputStream().write(postDataBytes);

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			} else {
				try {
					// remove flag pending
					DossierActionLocalServiceUtil.updatePending(clientDossierActionId, false);
					// remove DOSSIER_SYNC
					DossierSyncLocalServiceUtil.deleteDossierSync(dossierSyncId);

				} catch (Exception e) {
					// TODO: handle exception
				}
			}

			BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));

			String output;

			StringBuffer sb = new StringBuffer();

			while ((output = br.readLine()) != null) {
				sb.append(output);

			}

			System.out.println(sb.toString());

			conn.disconnect();

		} catch (MalformedURLException e) {

			e.printStackTrace();
		} catch (IOException e) {

			e.printStackTrace();

		}
	}

	protected ProcessAction getProcessAction(long groupId, long dossierId, String refId, String actionCode,
			long serviceProcessId) throws PortalException {

		ProcessAction action = null;

		try {
			List<ProcessAction> actions = ProcessActionLocalServiceUtil.getByActionCode(groupId, actionCode);

			Dossier dossier = getDossier(groupId, dossierId, refId);

			String dossierStatus = dossier.getDossierStatus();

			for (ProcessAction act : actions) {

				String preStepCode = act.getPreStepCode();

				ProcessStep step = ProcessStepLocalServiceUtil.fetchBySC_GID(preStepCode, groupId, serviceProcessId);

				if (Validator.isNotNull(step)) {
					if (step.getDossierStatus().equalsIgnoreCase(dossierStatus)) {
						action = act;
						break;
					}
				} else {
					action = act;
					break;
				}

			}

		} catch (Exception e) {
			throw new NotFoundException("NotProcessActionFound");
		}

		return action;
	}

	protected Dossier getDossier(long groupId, long dossierId, String refId) throws PortalException {

		Dossier dossier = null;

		if (dossierId != 0) {
			dossier = DossierLocalServiceUtil.fetchDossier(dossierId);
		} else {
			dossier = DossierLocalServiceUtil.getByRef(groupId, refId);
		}

		return dossier;
	}

	private void resetDossier(long groupId, String refId) {
		try {
			String path = "dossiers/" + refId + "/reset";
			URL url = new URL(baseUrl + path);

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();

			String authString = username + ":" + password;

			String authStringEnc = new String(Base64.getEncoder().encodeToString(authString.getBytes()));
			conn.setRequestProperty("Authorization", "Basic " + authStringEnc);

			conn.setRequestMethod(HttpMethods.GET);
			conn.setDoInput(true);
			conn.setDoOutput(true);
			conn.setRequestProperty("Accept", "application/json");
			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			conn.setRequestProperty("groupId", String.valueOf(groupId));

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));

			String output;

			StringBuffer sb = new StringBuffer();

			while ((output = br.readLine()) != null) {
				sb.append(output);

			}

			System.out.println(sb.toString());

			conn.disconnect();

		} catch (MalformedURLException e) {

			e.printStackTrace();
		} catch (IOException e) {

			e.printStackTrace();

		}
	}
	
	Log _log = LogFactoryUtil.getLog(DossierSyncManagementImpl.class.getName());

}
