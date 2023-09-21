import axios from "axios"
    let Base_Url = 'https://youtube-v31.p.rapidapi.com'
    const options = {
    params: {maxResults: '50'},
    headers: {
        'X-RapidAPI-Key': 'f181185155msh30e51881aa5054cp1c1fe5jsn69b4d28c3b06',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
    };
export const FetchFromApi = async (url) => {
    const res = await axios.get(`${Base_Url}/${url}` , options)
    return res
}

export default FetchFromApi