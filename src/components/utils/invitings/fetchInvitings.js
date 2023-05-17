import { FetchAPI_template } from "../FetchAPI_template"

export const fetchAllInvitings = async() => {

    const url = `https://mind-master-backend-production.up.railway.app/api/v1/client/invitings/all`;
    // const url = `http://localhost:5000/api/v1/client/invitings/all`;

    const method = "GET";

    const fetch_api_request = await FetchAPI_template(url,method);

    return fetch_api_request;
}
