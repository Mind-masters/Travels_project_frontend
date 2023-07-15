import { FetchAPI_template } from "../FetchAPI_template";

export const ShowContacts = async(data, token) => {

    if(!data || !token)return {message: "Something is missing"};

    const url = `https://mind-master-backend-production.up.railway.app/api/v1/user/invitings/contacts`;
    // const url = "http://localhost:5000/api/v1/user/invitings/contacts"

    const method = "POST";
    const body = {
        inviting_id: data.inviting_id
    }
    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}