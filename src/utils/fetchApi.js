
export default async function fetchApi(endpoint = '', query= ''){
    const base_url = import.meta.env.VITE_BASE_URL;
    try {   
        const response = await fetch(`${base_url}${endpoint}/?${query}`);

        if(!response.ok){
            const error = new Error("Error fetching: ", response);
            throw error
        }

        const res = await response.json();
        console.log(res)

        return res;
    } catch (error) {
        console.warn("Error fetching data: ", error);
    }
}