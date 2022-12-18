export const FetchAPI_template = async(url, method, body_obj, custom_token) => {

    const get_method = "GET" || "get";
    const post_method = "POST" || "post";

    const response = {
        status: false,
        data: null,
        message: "not implemented"
    }

    if(!url){response.status=501; response.message = "you must enter valid url!"}
    if(method !== get_method && method !== post_method){response.status=501; response.message = "make sure fetch method is valid!"}
    if(method === post_method && !body_obj){response.status=501; response.message = "you must define body object to send a POST request!"}
    if(method === post_method && !custom_token){response.status=501; response.message = "you must define user token to send a POST request!"}

    if(response.status === 501)return response;

    const custom_headers = (method === post_method) ? {
        "Content-Type" : "application/json",
        "accept" : "application/json",
        "authorization" : `Bearer ${custom_token}`
    } :
    {
        "Content-Type" : "application/json",
        "accept" : "application/json",
    }

    const custom_body = (method === get_method) ? null : JSON.stringify(body_obj) 

    try {

        const req = await fetch(url, {
            method: method || "GET", 
            headers: custom_headers,
            body: custom_body
        });

        if(!req.ok)throw new Error(req.statusText ||"Something went wrong!");

        const response_json = await req.json();

        response.data = response_json.response || "";
        response.status = true;
        response.message = response_json.message;

        
    } catch (error) {

        response.data = null;
        response.status = false;
        response.message = error.message || "failed to delete your trip :(";
    }


    return response
};