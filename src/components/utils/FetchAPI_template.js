export const FetchAPI_template = async(url, method, body_obj, custom_token) => {

    const response = {
        status: false,
        data: null,
        message: "not implemented"
    }

    try {

        const req = await fetch(url, {
            method: method, 
            headers: {
                "Content-Type" : "application/json",
                "accept" : "application/json",
                "authorization" : `Bearer ${custom_token}`
            },
            body: JSON.stringify(body_obj)
        });

        console.log("Req in fetch_template: ", req);
        
    } catch (error) {
        console.log("error in fetch_template: ", error);
        
        return response
    }


    return response
};