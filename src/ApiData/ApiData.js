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
        // const resp = await api.get('/attraction-filters/v2/list', {
            params: {
                query: query,
                limit: 20,
            }
        });

        return resp.data.data;
    } catch (error) {
        console.error("Error Fetching data", error);
        throw error;
    }
};




export const getAttractions = async (LocName) => {
    try {
        // const resp = await api.get('/attraction-filters/v2/list', {
        const resp = await api.get('/attractions/list', {
            params: { 
                location_id: LocName
             },
        });
        return resp.data.data;
    } catch (error) {
        console.error("Error Fetching data", error);
        throw error;
    }
};




// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
// const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/w/api.php';

// export const getBlogInfo = async (Place) => {
//     try {
//         const resp = await axios.get(PROXY_URL + WIKIPEDIA_API_URL, {
//             params:{
//                 action: 'query',
//                 prop: 'extracts',
//                 exintro:'',
//                 explaintext: '',
//                 format: 'json',
//                 titles: Place
//             },
//             // headers: {
//             //     'Origin': 'http://localhost:3000'
//             //   }
//         })

//         console.log(resp);
        
//         const pages = resp.data.query.pages;
//         const page = Object.values(pages)[0];
//         return page.extract;

//     } catch (error) {
//         console.error("Error fetching data", error);
//         throw error
//     }
// }