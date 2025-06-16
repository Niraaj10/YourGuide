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
    // url: 'https://chat-gpt26.p.rapidapi.com/',
    hostname: 'chatgpt-api8.p.rapidapi.com',
    port: null,
    path: '/',
    headers: {
      'x-rapidapi-key': '85099ca235msh0cfd70f603401d5p19fbc5jsn0c1d0eff6d5b',
      'x-rapidapi-host': 'chat-gpt26.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      // model: 'gpt-3.5-turbo',
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
    console.log(response);
    // console.log(response.data.choices[0].message.content);

  } catch (error) {
    console.error(error);
  }


}



export const fetchTripDataC = async (city, startDate, endDate) => {

  const options = {
    method: 'POST',
    // url: 'https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions',
    url: 'https://open-ai21.p.rapidapi.com/chatgpt',
    headers: {
      'x-rapidapi-key': API_KEY,
      // 'x-rapidapi-host': 'chatgpt-best-price.p.rapidapi.com',
      'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          //   content: `Create a detailed trip itinerary for ${city} from ${startDate} to ${endDate}, including activities, accommodations, and dining recommendations for each day.`

          // content: `Generate a detailed trip plan for ${city} from ${startDate} to ${endDate} first give 5-6 lines of description about the given city then recommend best hotels in the city like(Hotels: ....) then Include activities and restaurants with addresses and descriptions, for each day.`
          content: `Create a detailed trip plan for ${city} from ${startDate} to ${endDate} in **strict JSON format** and follow this also give me a summary of the trip and minimum 4-5 hotels with rates per night from cheap to expensive. give me the latitude and longitude of the city. lastly add hidden place(Mean the place that is most beautiful but not very crowded or explored) Follow this structure:

{
  "city": "<City name>",
  "Date": "<Start date> to <End date>",
  "description": "<5-6 line description of the city>",
  "hotels": [
    {
      "name": "Hotel Name",
      "description": "Brief description",
      "address": "Full address"
    }
  ],
  "itinerary": [
    {
      "day": "Day 1",
      "activities": [
        {
          "name": "Activity name",
          "description": "Brief description",
          "address": "Location"
        }
      ],
      "restaurants": [
        {
          "name": "Restaurant name",
          "description": "Short description",
          "address": "Full address"
        }
      ]
    }
    // Repeat for each day
  ],
  "longitude": "<Longitude of the city>",
  "latitude": "<Latitude of the city>",
  "hidden_place": {
    "name": "Hidden Place Name",
    "description": "Brief description of the hidden place",
    "address": "Full address of the hidden place"
  }
}

Only return pure JSON. Do not add any explanation or extra text before or after the JSON object.`


        }
      ]
    }
  };

  try {
    // const response = await axios.request(options);
    // // console.log(response.data);
    // console.log(response.data.choices[0].message.content);
    // return response.data.choices[0].message.content;

    const response = await axios.request(options);
    console.log(response)
    // let content = response.data.choices[0].message.content;
    let content = response.data.result;

    content = content.replace(/```json|```/g, '').trim();

    try {
      const tripData = JSON.parse(content);
      return tripData;
    } catch (parseError) {
      console.error('Failed to parse JSON:', parseError);
      console.error('Raw response:', content);
      throw new Error('Invalid JSON format from API');
    }

  } catch (error) {
    console.error(error);
  }

}







// export const getPhotos = async (Place) => {

//   try {

//       const apiUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${Place}&inputtype=textquery&fields=place_id,photos&key=${GOOGLE_API}`;
//       const proxyUrl = "https://cors-anywhere.herokuapp.com/";

//       const placeSearch = `${proxyUrl}${apiUrl}`;
//       const placeRes = await axios.get(placeSearch);
//       const placeData= placeRes.data;
//       console.log(placeData);

//       // if (place) {

//       // }
//   } catch (error) {
//       console.error("Error Fetching data", error);
//       throw error;
//   }
// };



export const getPhotos = async (place) => {
  const options = {
    method: 'GET',
    url: `https://maps-data.p.rapidapi.com/photos.php`,
    params: { place_name: place, lang: 'en', country: 'india' },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'maps-data.p.rapidapi.com',
    },
  };

  try {
    const res = await axios.request(options);
    console.log(res);

    console.log(res.data.photos); // Adjust based on the API response structure
  } catch (err) {
    // setError('Error fetching photos');
    console.error(err);
  }
};



// const fetchBusinessId = async (name) => {
//   const options = {
//     method: 'GET',
//     url: 'https://maps-data.p.rapidapi.com/search.php',
//     params: { query: name, country: 'india' },
//     headers: {
//       'x-rapidapi-key': API_KEY,
//       'x-rapidapi-host': 'maps-data.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     if (response.data && response.data.results && response.data.results.length > 0) {
//       return response.data.results[0].business_id; // Adjust based on the API response
//     } else {
//       console.error('No place found with that name');
//       return null;
//     }
//   } catch (err) {
//     // setError('Error fetching place ID');
//     console.error('Error fetching place ID',err);
//     return null;
//   }
// };






