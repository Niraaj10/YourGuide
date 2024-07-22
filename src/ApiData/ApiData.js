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



export const fetchTripDataC = async (city, startDate, endDate) => {

    const options = {
        method: 'POST',
        url: 'https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions',
        headers: {
          'x-rapidapi-key': '85099ca235msh0cfd70f603401d5p19fbc5jsn0c1d0eff6d5b',
          'x-rapidapi-host': 'chatgpt-best-price.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
            //   content: `Create a detailed trip itinerary for ${city} from ${startDate} to ${endDate}, including activities, accommodations, and dining recommendations for each day.`

              content: `Generate a detailed trip plan for ${city} from ${startDate} to ${endDate} first give 5-6 lines of description about the given city then recommend best hotels in the city like(Hotels: ....) then Include activities and restaurants with addresses and descriptions, for each day.`

            //   content: `Create a detailed trip itinerary for ${city} from ${startDate} to ${endDate}, first give 5-6 lines of description about the given city then recommend 4-5 best hotels in the city like(Hotels: ....) and including 3 activities per day with specific addresses or locations and dining recommendations with addresses for each day, give the detailed location for each place along with name and description of each place and give information like this (
            //   (Given City Name), description...
            //   **Hotels:...
            //   **Day 1 : 
            //   Activities: 
            //   Activity Name
            //   Activity Description: ...
            //   Activity Location: .... ,

            //   Restaurants: 
            //   Restaurant Name
            //   Restaurant Description:...
            //   Restaurant Location:....,
            //   .
            //   .
            //   .so on....for each days
            //   ).`

            }
          ]
        }
      };
      
      try {
        const response = await axios.request(options);
        // console.log(response.data);
        console.log(response.data.choices[0].message.content);
        return response.data.choices[0].message.content;
      } catch (error) {
          console.error(error);
      }

}








