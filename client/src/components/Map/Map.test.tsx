import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Map from './Map';

jest.mock('@react-google-maps/api', () => ({
  useJsApiLoader: jest.fn(() => ({
    isLoaded: true,
  })),
}));

describe('Map component', () => {
  const mockPlaces = [
   {
      address: "123 Main St",
      address_obj: {
        city: "City",
        country: "Country",
        postalcode: "12345",
        state: null,
        street1: "Main St",
        street2: null,
      },
      ancestors: [
        {
          abbrv: null,
          location_id: "1",
          name: "Ancestor 1",
          subcategory: [
            {
              key: "subcategory1",
              name: "Subcategory 1",
            },
            {
              key: "subcategory2",
              name: "Subcategory 2",
            },
          ],
        },
        {
          abbrv: null,
          location_id: "2",
          name: "Ancestor 2",
          subcategory: [
            {
              key: "subcategory3",
              name: "Subcategory 3",
            },
          ],
        },
      ],
      awards: [],
      bearing: "NE",
      category: {
        key: "category1",
        name: "Category 1",
      },
      cuisine: [
        {
          key: "cuisine1",
          name: "Cuisine 1",
        },
        {
          key: "cuisine2",
          name: "Cuisine 2",
        },
      ],
      description: "This is a place description.",
      dietary_restrictions: [
        {
          key: "restriction1",
          name: "Restriction 1",
        },
        {
          key: "restriction2",
          name: "Restriction 2",
        },
      ],
      distance: "1.5",
      distance_string: "1.5 km",
      doubleclick_zone: "zone1",
      establishment_types: [
        {
          key: "establishment1",
          name: "Establishment 1",
        },
      ],
      is_candidate_for_contact_info_suppression: false,
      is_closed: false,
      is_jfy_enabled: true,
      is_long_closed: false,
      latitude: "12.345",
      location_id: "123",
      location_string: "City, Country",
      longitude: "67.890",
      name: "Sample Place",
      nearest_metro_station: [], 
      num_reviews: "100",
      parent_display_name: "Parent",
      phone: "123-456-7890",
      photo: {
        caption: "Photo caption",
        helpful_votes: "10",
        id: "photo1",
        images: {
          large: {
            height: "800",
            url: "https://example.com/large.jpg",
            width: "1200",
          },
          medium: {
            height: "400",
            url: "https://example.com/medium.jpg",
            width: "600",
          },
          original: {
            height: "1600",
            url: "https://example.com/original.jpg",
            width: "2400",
          },
          small: {
            height: "200",
            url: "https://example.com/small.jpg",
            width: "300",
          },
          thumbnail: {
            height: "100",
            url: "https://example.com/thumbnail.jpg",
            width: "150",
          },
        },
        is_blessed: true,
        published_date: "2023-06-20",
        uploaded_date: "2023-06-19",
        user: {
          member_id: "member1",
          type: "user",
          user_id: null,
        },
      },
      preferred_map_engine: "Google Maps",
      price_level: "$$",
      ranking: "1",
      ranking_category: "Category 1",
      ranking_denominator: "100",
      ranking_geo: "Geo 1",
      ranking_geo_id: "geo1",
      ranking_position: "1",
      rating: "4.5",
      raw_ranking: "4.56",
      subcategory: [
        {
          key: "subcategory4",
          name: "Subcategory 4",
        },
      ],
      timezone: "UTC",
      web_url: "https://example.com/place",
      website: "https://example.com",
      write_review: "https://example.com/write-review",
    }
    
  ];

  test('renders map with markers', () => {
    render(
      <Map
        setCoordinates={jest.fn()}
        setBounds={jest.fn()}
        places={mockPlaces}
        selectedSearch={null}
      />
    );

    expect(screen.getByTestId('google-map')).toBeInTheDocument();
    expect(screen.getAllByTestId('marker')).toHaveLength(mockPlaces.length);
  });

  test('renders info window when marker is clicked', async () => {
    render(
      <Map
        setCoordinates={jest.fn()}
        setBounds={jest.fn()}
        places={mockPlaces}
        selectedSearch={null}
      />
    );

    const marker = screen.getAllByTestId('marker')[0];
    userEvent.click(marker);

    await waitFor(() => {
      expect(screen.getByTestId('info-window')).toBeInTheDocument();
      expect(screen.getByText('Place 1')).toBeInTheDocument();
      expect(screen.getByText('Address 1')).toBeInTheDocument();
    });
  });

  test('closes info window when close button is clicked', async () => {
    render(
      <Map
        setCoordinates={jest.fn()}
        setBounds={jest.fn()}
        places={mockPlaces}
        selectedSearch={null}
      />
    );

    const marker = screen.getAllByTestId('marker')[0];
    userEvent.click(marker);

    await waitFor(() => {
      const closeButton = screen.getByTestId('info-window-close');
      userEvent.click(closeButton);

      expect(screen.queryByTestId('info-window')).not.toBeInTheDocument();
    });
  });
});
