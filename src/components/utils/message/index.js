import { FetchAPI_template } from "../FetchAPI_template";

export const SendMessage = async(data,token) => {

    const url = `https://mind-master-backend-production.up.railway.app/api/v1/${token?"user":"client"}/message`;
    // const url = `http://localhost:5000/api/v1/${token?"user":"client"}/message`;

    const method = "POST";
    const body = data;

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}

export const SendCoordinatesMessage = async(data) => {

    const url = `https://mind-master-backend-production.up.railway.app/api/v1/client/coordinates`;
    // const url = `http://localhost:5000/api/v1/client/coordinates`;
    
    const method = "POST";
    const body = {
        email: data.email,
        coordinates: data.coordinates,
    };

    const fetch_api_request = await FetchAPI_template(url,method,body);

    return fetch_api_request;

}