import axios from 'axios';
import { Bounds } from './types';
export const getPlacesData = async (type: string, {sw, ne}: Bounds) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': "2765efc2a3msh486712821525632p1957fajsn99ece2434620",
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
