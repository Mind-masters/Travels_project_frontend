export const AddNewPlace = async(data, token) => {

    const response = {
        status: false,
        data: null,
        error: "not implemented"
    }

    try {

        const Req = await fetch("https://mind-master-backend-production.up.railway.app/api/v1/user/places/new", { 
            method: 'POST', 
            headers: {
                "Content-Type" : "application/json",
                "accept" : "application/json",
                "authorization" : `Bearer ${token}`
            },
            body: JSON.stringify({
                title: data.title,
                description: data.description,
                image: data.image,
                location: data.location
            })
        })

        if(!Req.ok)throw new Error(Req.statusText || "Cannot share your trip..")


        const jsonData = await Req.json();

        response.status = true;
        response.error = null;
        response.data = jsonData.message || "success";

        
    } catch (error) {

        response.status = false;
        response.error = error.message || "failed";
        response.data = null;
    }

    return response
}