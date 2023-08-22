import axios from 'axios';
import { getPlacesData } from './TravelAdvisorAPI';
import { mockPlaces } from './mockPlaces';
import '@testing-library/jest-dom'

jest.mock('axios', () => ({
  get: () => new Promise(() => mockPlaces)
  }
));
const mockedAxios = axios as jest.Mocked<typeof axios>;

const type = 'restaurants';
const bounds = {
  sw: { lat: 40.123, lng: -73.456 },
  ne: { lat: 40.789, lng: -73.123 },
};


const sampleResponse = {
  data: {
    data: mockPlaces,
  },
};

describe('getPlacesData', () => {
  it('should fetch places data from the API', async () => {
    mockedAxios.get.mockResolvedValueOnce(sampleResponse);

    const result = await getPlacesData(type, bounds);

    expect(mockedAxios.get).toHaveBeenCalledWith('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
      params: {
        bl_latitude: bounds.sw.lat,
        bl_longitude: bounds.sw.lng,
        tr_longitude: bounds.ne.lng,
        tr_latitude: bounds.ne.lat,
      },
      headers: {
        'x-rapidapi-key': '{InsertTravelAdvisorApiKeyHere}',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    expect(result).toEqual(sampleResponse.data.data);
  });

  it('should handle errors during API call', async () => {
    const errorMessage = 'API error';

    mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

    await getPlacesData(type, bounds);

    expect(console.log).toHaveBeenCalledWith(errorMessage);
  });
});
