import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '43fbd86c71msh344d6a4827da1b0p156d40jsn7544564f1f4f',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
        
    });
    return data;
}