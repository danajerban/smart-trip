import { render, screen, fireEvent } from '@testing-library/react';
import PlaceDetails from './PlaceDetails';
import { mockPlaces } from '../../mockPlaces';
import '@testing-library/jest-dom';


describe('PlaceDetails', () => {
  const place = mockPlaces[0];

  it('renders place details correctly', () => {
    render(<PlaceDetails place={place} />);

    const placeNameElement = screen.getByText(place.name);
    expect(placeNameElement).toBeInTheDocument();

    const ratingElement = screen.getByText(`${place.rating} out of ${place.num_reviews} reviews`);
    expect(ratingElement).toBeInTheDocument();

    const cuisineElements = screen.getAllByTestId('cuisine');
    expect(cuisineElements).toHaveLength(place.cuisine.length);
    place.cuisine.forEach((cuisine, index) => {
      expect(cuisineElements[index]).toHaveTextContent(cuisine.name);
    });

    const addressElement = screen.getByText(place.address);
    expect(addressElement).toBeInTheDocument();

    const phoneElement = screen.getByText(place.phone);
    expect(phoneElement).toBeInTheDocument();

    const tripAdvisorButton = screen.getByRole('button', { name: /trip advisor/i });
    const websiteButton = screen.getByRole('button', { name: /website/i });
    expect(tripAdvisorButton).toBeInTheDocument();
    expect(websiteButton).toBeInTheDocument();    
  });
  it('should open trip advisor link in new tab when trip advisor button is clicked', () => {
    render(<PlaceDetails place={place} />);
    const tripAdvisorButton = screen.getByRole('button', { name: /trip advisor/i });
    const websiteButton = screen.getByRole('button', { name: /website/i });
    const spy = jest.spyOn(window, 'open');

    fireEvent.click(tripAdvisorButton);
    expect(spy).toHaveBeenCalledWith(place.web_url, '_blank');

    fireEvent.click(websiteButton);
    expect(spy).toHaveBeenCalledWith(place.website, '_blank');
  });
});
