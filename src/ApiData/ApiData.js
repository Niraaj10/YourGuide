import axios from 'axios';


const API_URL = process.env.REACT_APP_TRAVEL_ADVISOR_API_URL;
// console.log(API_URL);

// console.log(AI_KEY);

const API_KEY = process.env.REACT_APP_TRAVEL_API_KEY;



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


export const fetchTripData = async (city, startDate, endDate) => {

    const options = {
        method: 'POST',
        url: 'https://chat-gpt26.p.rapidapi.com/',
        headers: {
          'x-rapidapi-key': '85099ca235msh0cfd70f603401d5p19fbc5jsn0c1d0eff6d5b',
          'x-rapidapi-host': 'chat-gpt26.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Create a detailed trip itinerary for ${city} from ${startDate} to ${endDate}, including activities, accommodations, and dining recommendations for each day.`
            }
          ]
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          console.log(response.data.choices[0].message.content);

      } catch (error) {
          console.error(error);
      }



}









