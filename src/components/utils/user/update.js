import { FetchAPI_template } from "../FetchAPI_template";


// ----------------------------------UPDATE----------------------------------------------------------


export const Update = async(body, token) => {

    const url = "https://mind-master-backend-production.up.railway.app/api/v1/user/me/update";

    const method = "POST";

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}


// ----------------------------------SETTINGS----------------------------------------------------------


export const UpdateSettings = async(body, token) => {

    const url = "https://mind-master-backend-production.up.railway.app/api/v1/user/me/settings";

    const method = "POST";

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;
}


// ----------------------------------INTERESTS----------------------------------------------------------


export const UpdateInterests = async(body, token) => {

    const url = "https://mind-master-backend-production.up.railway.app/api/v1/user/me/interests";

    const method = "POST";

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;
}