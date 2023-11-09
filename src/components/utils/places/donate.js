import { FetchAPI_template } from "../FetchAPI_template";

export const Donate = async(data, token) => {

    const url = "https://mind-master-backend-production.up.railway.app/api/v1/user/donate";
    // const url = "http://localhost:5000/api/v1/user/donate"


    const method = "POST";
    
    const fetch_api_request = await FetchAPI_template(url,method,data,token);

    return fetch_api_request;
}
