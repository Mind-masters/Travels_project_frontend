export const submitNewUser = async(body_obj, token) => {

    const response = {
        status: false,
        data: null,
        message: "not implemented"
    };


    if(!body_obj || !token) return response;

    try {
        const req  = await fetch("https://mind-master-backend-production.up.railway.app/api/v1/user/me/update", {
            method: "PATCH",
            headers: {
              "Content-Type" : "application/json",
              "accept" : "application/json",
              "authorization" : `Bearer ${token}`
            },
            body: JSON.stringify(body_obj)
        })

        if(!req.ok)throw new Error("something went wrong");

        const requsestData = await req.json();

        if(!requsestData.data)throw new Error(requsestData.message || "something went wrong");

        response.status=true;
        response.data = requsestData.data;
        response.message = requsestData.message;

        
    } catch (error) {

        response.status = false;
        response.data = null;
        response.message = error.message || "Unexpected error, please try again";

    }

    return response;
}