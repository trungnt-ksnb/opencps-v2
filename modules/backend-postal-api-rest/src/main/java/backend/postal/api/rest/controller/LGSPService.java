package backend.postal.api.rest.controller;

import com.liferay.portal.kernel.json.JSONObject;
import java.util.Map;

public interface LGSPService {
    public JSONObject getToken(String urlToken, String keyToken) throws Exception;
    public JSONObject getTokenTTTT(String urlToken, String authorizationKey) throws Exception;
    public JSONObject postTTTT(String url, String token, Map<String, Object> body, String serviceCode) throws Exception;
}
