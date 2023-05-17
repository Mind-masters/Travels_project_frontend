import { FetchAPI_template } from "../FetchAPI_template";

export const deleteInviteById = async(inviting_id, token) => {

    if(!inviting_id || !token)return {message: "Something is missing"};

    const url = `https://mind-master-backend-production.up.railway.app/api/v1/user/invitings/delete/${inviting_id}`;
    // const url = `http://localhost:5000/api/v1/user/invitings/delete/${inviting_id}`;

    const method = "POST";
    const body = {};

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}