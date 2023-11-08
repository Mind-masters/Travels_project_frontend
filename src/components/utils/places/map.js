import { FetchAPI_template } from "../FetchAPI_template";

export const Map = async(data, token) => {

    if(!data || !token)return {message: "Something is missing"};

    const url = `https://mind-master-backend-production.up.railway.app/api/v1/user/places/map`;
    // const url = "http://localhost:5000/api/v1/user/places/map"

    const method = "POST";
    const body = {
        pid: data.pid
    }
    const fetch_api_request = await FetchAPI_template(url,method,body,token);
    console.log("kazkas: ", fetch_api_request)
    return fetch_api_request;

}