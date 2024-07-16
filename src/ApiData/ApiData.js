import axios from 'axios';


const API_URL = process.env.REACT_APP_TRAVEL_ADVISOR_API_URL;
// console.log(API_URL);

const API_KEY = process.env.REACT_APP_TRAVEL_API_KEY;
// console.log(API_KEY);



const api = axios.create({
    baseURL: API_URL,
    headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
	},
})


export const getACLocation = async (query) => {
    
    try {
        const resp = await api.get('/locations/search', {
            params: {
                query: query,
                limit: 10,
            }
        });

        return resp.data.data;
    } catch (error) {
        console.error("Error Fetching data", error);
        throw error;
    }
};





// export const getACLocation = async (query) => {
    
//     try {
//         const resp = await api.get('locations/v2/auto-complete', {
//             params: {
//                 query: query,
//             }
//         });
//         return resp.data.data;
//     } catch (error) {
//         console.error("Error Fetching data", error);
//         throw error;
//     }
// };