import { FetchAPI_template } from "../FetchAPI_template";

export const deletePlaceById = async(pid, token) => {

    if(!pid || !token)return {message: "Something is missing"};

    const url = `https://mind-master-backend-production.up.railway.app/api/v1/user/places/delete/${pid}`;
    const method = "POST";
    const body = {};

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}