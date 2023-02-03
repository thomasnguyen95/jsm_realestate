import axios from 'axios';

export const baseUrl = process.env.RAPIDAPI_BAYUT_URL;

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.RAPIDAPI_BAYUT_HOST
        }
    });

    return data;
}