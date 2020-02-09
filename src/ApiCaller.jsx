const CIVIC_INFO_API_KEY = process.env.REACT_APP_CIVIC_INFO_API_KEY;
const REPRESENTATIVES_ENDPOINT = 'https://www.googleapis.com/civicinfo/v2/representatives';

class APICallerUtils {
  encodeData(data) {
    return Object.keys(data).map(function(key) {
        return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
  }
  async getRepresentatives(params) {
    const query_params = {...params, "key": CIVIC_INFO_API_KEY};
    const response = await fetch(REPRESENTATIVES_ENDPOINT + "?" + this.encodeData(query_params));
    return await response.json();
  }
}

export default APICallerUtils;