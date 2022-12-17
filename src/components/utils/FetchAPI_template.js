export const FetchAPI_template = async(url, method, body_obj, custom_token) => {

    const response = {
        status: false,
        data: null,
        message: "not implemented"
    }

    const custom_headers = custom_token ? {
        "Content-Type" : "application/json",
        "accept" : "application/json",
        "authorization" : `Bearer ${custom_token}`
    } :
    {
        "Content-Type" : "application/json",
        "accept" : "application/json",
    }

    try {

        const req = await fetch(url, {
            method: method || "GET", 
            headers: custom_headers,
            body: JSON.stringify(body_obj || {})
        });

        if(!req.ok)throw new Error(req.statusText ||"Something went wrong!");

        const response_json = await req.json();

        response.data = "";
        response.status = true;
        response.message = response_json.message;

        
    } catch (error) {

        response.data = null;
        response.status = false;
        response.message = error.message || "failed to delete your trip :(";
    }


    return response
};