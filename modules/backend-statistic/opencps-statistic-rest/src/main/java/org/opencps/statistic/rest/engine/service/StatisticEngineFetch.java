package org.opencps.statistic.rest.engine.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.opencps.statistic.rest.dto.DossierStatisticData;
import org.opencps.statistic.rest.dto.GetDossierData;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class StatisticEngineFetch {

	private final static Logger LOG = LoggerFactory.getLogger(StatisticEngineFetch.class);

	public void fecthStatisticData(long groupId, Map<String, DossierStatisticData> statisticData,
			List<GetDossierData> lsDossierData) {

		LOG.info("STARTTING TIME " + LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));

		for (GetDossierData dossierData : lsDossierData) {

			StatisticEngineFetchEntry engineFetchEntry = new StatisticEngineFetchEntry();

			// all site, all domain
			
			String type1 = "all@all";

			DossierStatisticData dataType1 = new DossierStatisticData();

			if (statisticData.containsKey(type1)) {
				dataType1 = statisticData.get(type1);
			}

			engineFetchEntry.updateDossierStatisticData(dataType1, dossierData);

			statisticData.put(type1, dataType1);
			

			// all site each domain
			String type2 = "all@" + dossierData.getDomainCode();
			
			DossierStatisticData dataType2 = new DossierStatisticData();


			dataType2.setDomainCode(dossierData.getDomainCode());
			dataType2.setDomainName(dossierData.getDomainName());

			if (statisticData.containsKey(type2)) {
				dataType2 = statisticData.get(type2);
			}

			engineFetchEntry.updateDossierStatisticData(dataType2, dossierData);

			statisticData.put(type2, dataType2);

			// each site all domain
			
			String type3 = dossierData.getGovAgencyCode() + "@all";


			DossierStatisticData dataType3 = new DossierStatisticData();
			dataType3.setGovAgencyCode(dossierData.getGovAgencyCode());
			dataType3.setGovAgencyName(dossierData.getGovAgencyName());


			if (statisticData.containsKey(type3)) {
				dataType3 = statisticData.get(type3);
			}

			engineFetchEntry.updateDossierStatisticData(dataType3, dossierData);

			statisticData.put(type3, dataType3);

			// each site each domain
			
			String type4 = dossierData.getGovAgencyCode() + "@" + dossierData.getDomainCode();
			
			DossierStatisticData dataType4 = new DossierStatisticData();
			dataType4.setGovAgencyCode(dossierData.getGovAgencyCode());
			dataType4.setGovAgencyName(dossierData.getGovAgencyName());

			dataType4.setDomainCode(dossierData.getDomainCode());
			dataType4.setDomainName(dossierData.getDomainName());
			
			if (statisticData.containsKey(type4)) {
				dataType4 = statisticData.get(type4);
			}

			engineFetchEntry.updateDossierStatisticData(dataType4, dossierData);

			statisticData.put(type4, dataType4);
		}

	}

}
