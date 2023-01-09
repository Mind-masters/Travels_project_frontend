import { FetchAPI_template } from "../FetchAPI_template"

export const fetchUserPlaces = async(token) => {

    if(!token)return {status: false, error: "Access token is missing"};

    const url = `https://mind-master-backend-production.up.railway.app/api/v1/user/places/get_all`;
    const method = "GET";

    const fetch_api_request = await FetchAPI_template(url,method,null,token);
    if(!fetch_api_request.status)return fetch_api_request;

    const AllPlaces = fetch_api_request.data.filter(place => place.deleted === false);

    fetch_api_request.data = AllPlaces;


    return fetch_api_request;

}

export const fetchAllPlaces = async() => {

    const url = `https://mind-master-backend-production.up.railway.app/api/v1/client/places/all`;
    const method = "GET";

    const fetch_api_request = await FetchAPI_template(url,method);

    return fetch_api_request;
}
