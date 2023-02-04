import { FetchAPI_template } from "../FetchAPI_template";


export const Create = async(data, token) => {

    const url = "https://mind-master-backend-production.up.railway.app/api/v1/user/places/new";
    const method = "POST";
    const body = {
        title: data.title,
        description: data.description,
        image: data.image,
        location: data.location
    }

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}