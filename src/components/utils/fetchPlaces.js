export const fetchUserPlaces = async(token) => {

    const response = {
        status: false,
        data: null,
        error: "not implemented"
    }

    try {

        const Req = await fetch("http://localhost:5000/api/v1/user/places/get_all", { 
            method: 'GET', 
            headers: {
                "Content-Type" : "application/json",
                "accept" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        })

        if(!Req.ok)throw new Error(Req.statusText || "Failed to fetch your trips..")


        const jsonData = await Req.json();

        console.log("json data: ", jsonData)
        const PlacesArray = jsonData.places.filter(item => item.deleted === false)

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

    try {
        
    } catch (error) {
        
    }
}