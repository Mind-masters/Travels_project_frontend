import { FetchAPI_template } from "../FetchAPI_template"

export const fetchUserPlaces = async(token) => {

    const response = {
        status: false,
        data: null,
        error: "not implemented"
    }

    try {

        const Req = await fetch("https://mind-master-backend-production.up.railway.app/api/v1/user/places/get_all", { 
            method: 'GET', 
            headers: {
                "Content-Type" : "application/json",
                "accept" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        })

        if(!Req.ok)throw new Error(Req.statusText || "Failed to fetch your trips..")


        const jsonData = await Req.json();

        console.log("fetching user plces | json data: ", jsonData)
        const PlacesArray = jsonData.response.filter(item => item.deleted === false)

        response.status = true;
        response.error = null;
        response.data = PlacesArray;

        
    } catch (error) {

        response.status = false;
        response.error = error.message || "failed";
        response.data = null;
    }

    return response

}

export const fetchSinglePlace = async(id) => {

    try {
        
    } catch (error) {
        
    }
}

export const fetchAllPlaces = async() => {

    const url = `https://mind-master-backend-production.up.railway.app/api/v1/client/places/all`;
    const method = "GET";

    const fetch_api_request = await FetchAPI_template(url,method);

    return fetch_api_request;
}