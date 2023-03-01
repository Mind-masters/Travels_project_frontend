import { FetchAPI_template } from "../FetchAPI_template";


export const Create = async(data, token) => {

    const url = "https://mind-master-backend-production.up.railway.app/api/v1/user/invitings/new";
    const method = "POST";
    const body = {
        title: data.about,
        about: data.about,//"Looking for a trip buddy, this is my first post!",
        userCountryImage: data.userCountryImage,
        finalPlace: data.finalPlace
    }

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}