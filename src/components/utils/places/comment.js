import { FetchAPI_template } from "../FetchAPI_template";

export const Comment = async(data, token) => {

    if(!data || !token)return {message: "Something is missing"};

    const url = `https://mind-master-backend-production.up.railway.app/api/v1/user/places/comment`;
    const method = "POST";
    const body = {
        comment: {text: data.text},
        pid: data.pid
    }
    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}