export const Create = async(data, token) => {

    console.log("Create _ data: ", data)

    const url = "https://mind-master-backend-production.up.railway.app/api/v1/user/places/new";
    // const url = "http://localhost:5000/api/v1/user/places/new"

    const headers = new Headers();
    headers.append('authorization', `Bearer ${token}`);

    const fetch_api_request = await fetch(url, {
      method: "POST",
      headers: headers,
      body: data
    });
    

    return fetch_api_request;

}