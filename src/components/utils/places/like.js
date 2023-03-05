import { FetchAPI_template } from "../FetchAPI_template";


export const Like_ = async(data, token) => {

    const url = "https://mind-master-backend-production.up.railway.app/api/v1/user/places/like";
    const method = "POST";
    const body = {
        pid: data
    }

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}