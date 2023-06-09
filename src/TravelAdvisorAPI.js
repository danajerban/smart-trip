//import axios from "axios";
//const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// mock options for initial testing
// const options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "X-RapidAPI-Key": "d16ff41b0amsh3c5764111a484c7p12adcfjsn97dbae9e7f45",
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//   },
// };

// export const getPlacesData = async (type, sw, ne) => {
//   try {
//     const {
//       data: { data }
//     } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
//       params: {
//         bl_latitude: sw.lat, //bottom left is gonna be south west.latitude
//         tr_latitude: ne.lat, //top right -> north east.latitude
//         bl_longitude: sw.lng, //bottom left -> south west.longitude
//         tr_longitude: ne.lng, //top right -> north east.longitude
//       },
//       headers: {
//         "X-RapidAPI-Key": process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
//         "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//       },
//     });
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
import axios from 'axios';
//const a = 'https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary'

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};