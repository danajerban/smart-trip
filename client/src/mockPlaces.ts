import { Place } from "./types";

export const mockPlaces: Place[] = [
  {
    address: 'Friedrichstr. 115, 10117 Berlin Germany',
    address_obj: {
      street1: 'Friedrichstr. 115',
      street2: null,
      city: 'Berlin',
      state: null,
      country: 'Germany',
      postalcode: '10117'
    },
    ancestors: [
      {subcategory: Array(1), name: 'Berlin', abbrv: null, location_id: '187323'},
      {subcategory: Array(1), name: 'Germany', abbrv: null, location_id: '187275'}
    ],
    awards: [],
    bearing: 'west',
    category: {key: 'restaurant', name: 'Restaurant'},
    cuisine: [
      { key: '10394', name: 'Mediterranean' },
      { key: '10643', name: 'Vegetarian Friendly' },
      { key: '10646', name: 'Vegan Options' },
      { key: '10665', name: 'Gluten Free Options' },
      { key: '10992', name: 'Breakfast' }
    ],
    description: 'Fresh and selfmade mediterranean food. We serve breakfast, lunch, dinner. Try our selfmade couscous variants! Vegetarian and vegan dishes in Berlin-Mitte.',
    dietary_restrictions: [
      {key: '10665', name: 'Vegetarian Friendly'},
      {key: '10992', name: 'Gluten Free Options'},
      {key: '10697', name: 'Vegan Options'}
    ],
    distance: '0.7179061769309458',
    distance_string: '0.7 km',
    doubleclick_zone: 'germany.berlin',
    establishment_types: [
      {key: '10591', name: 'Restaurants'}
    ],
    is_candidate_for_contact_info_suppression: false,
    is_closed: false,
    is_jfy_enabled: false,
    is_long_closed: false,
    latitude: '52.52351',
    location_id: '8789766',
    location_string: 'Berlin',
    longitude: '13.387203',
    name: 'Cafe Couscous -Vege',
    nearest_metro_station: [],
    num_reviews: '135',
    parent_display_name: 'Berlin',
    phone: '+49 30 55070382',
    photo: {
      caption: '',
      helpful_votes: '0',
      id: '622956468',
      images: {
        large: {width: '550', url: 'https://media-cdn.tripadvisor.com/media/photo-s/25/21/8f/b4/caption.jpg', height: '412'},
        medium: {width: '250', url: 'https://media-cdn.tripadvisor.com/media/photo-f/25/21/8f/b4/caption.jpg', height: '187'},
        original: {width: '1134', url: 'https://media-cdn.tripadvisor.com/media/photo-o/25/21/8f/b4/caption.jpg', height: '850'},
        small: {width: '150', url: 'https://media-cdn.tripadvisor.com/media/photo-l/25/21/8f/b4/caption.jpg', height: '150'},
        thumbnail: {width: '50', url: 'https://media-cdn.tripadvisor.com/media/photo-t/25/21/8f/b4/caption.jpg', height: '50'},
      },
      is_blessed: true,
      published_date: '2022-08-08T12:31:04-0400',
      uploaded_date: '2022-08-08T12:31:04-0400',
    },
    user: {user_id: null, member_id: '0', type: 'user'},
    preferred_map_engine: 'default',
    price_level: '$',
    ranking: '#2 of 6388 Restaurants in Berlin',
    ranking_category: 'restaurant',
    ranking_denominator: '6388',
    ranking_geo: 'Berlin',
    ranking_geo_id: '187323',
    ranking_position: '2',
    rating: '5.0',
    raw_ranking: '4.712',
    subcategory: [{key: 'cafe', name: 'Café'}],
    timezone: 'Europe/Berlin',
    web_url: 'https://www.tripadvisor.com/Restaurant_Review-g187323-d8789766-Reviews-Cafe_Couscous_Vege-Berlin.html',
    website: 'http://cafe-couscous.de',
    write_review: 'https://www.tripadvisor.com/UserReview-g187323-d8789766-Cafe_Couscous_Vege-Berlin.html'
  },
  {
    address: "Dunckerstr. 85, 10437 Berlin Germany",
    address_obj: {
      street1: 'Dunckerstr. 85',
      street2: null,
      city: 'Berlin',
      state: null,
      country: 'Germany',
      postalcode: '10117'
    },
    ancestors: [
      {subcategory: Array(1), name: 'Berlin', abbrv: null, location_id: '187323'},
      {subcategory: Array(1), name: 'Germany', abbrv: null, location_id: '187275'}
    ],
    awards: [],
    bearing: 'northeast',
    category: {key: 'restaurant', name: 'Restaurant'},
    cuisine: [
      {key: '10654', name: 'European'},
      {key: '10671', name: 'Fusion'},
      {key: '10679', name: 'Healthy'},
      {key: '10665', name: 'Vegetarian Friendly'},
      {key: '10697', name: 'Vegan Options'}
    ],
    description: "Property is temporarily closed\nWe do just one dish, called \"häppie\". it's a kinda fusion steamed bun, inspired by the sweet traditional austrian \"Germknödel\" and reinvented häppie-style, especially savory versions - all with fluffy yeast dough, different fillings, sauces, toppings and a side salad ",
    dietary_restrictions: [
      {key: '10665', name: 'Vegetarian Friendly'},
      {key: '10697', name: 'Vegan Options'},
    ],
    distance: '2.4018559280500633',
    distance_string: '2.4 km',
    doubleclick_zone: 'eu.germany.berlin',
    establishment_types: [
      {key: '10591', name: 'Restaurants'}
    ],
    is_candidate_for_contact_info_suppression: false,
    is_closed: false,
    is_jfy_enabled: false,
    is_long_closed: false,
    latitude: '52.541405',
    location_id: '8025081',
    location_string: 'Berlin',
    longitude: '3.419829',
    name: 'happies',
    nearest_metro_station: [],
    num_reviews: '391',
    parent_display_name: 'Berlin',
    phone: '+49 1511 4984140',
    photo: {
      caption: '',
      helpful_votes: '0',
      id: '622956468',
      images: {
        large: {width: '550', url: 'https://media-cdn.tripadvisor.com/media/photo-s/25/21/8f/b4/caption.jpg', height: '412'},
        medium: {width: '250', url: 'https://media-cdn.tripadvisor.com/media/photo-f/25/21/8f/b4/caption.jpg', height: '187'},
        original: {width: '1134', url: 'https://media-cdn.tripadvisor.com/media/photo-o/25/21/8f/b4/caption.jpg', height: '850'},
        small: {width: '150', url: 'https://media-cdn.tripadvisor.com/media/photo-l/25/21/8f/b4/caption.jpg', height: '150'},
        thumbnail: {width: '50', url: 'https://media-cdn.tripadvisor.com/media/photo-t/25/21/8f/b4/caption.jpg', height: '50'},
      },
      is_blessed: true,
      published_date: '2022-08-08T12:31:04-0400',
      uploaded_date: '2022-08-08T12:31:04-0400',
    },
    user: {user_id: null, member_id: '0', type: 'user'},
    preferred_map_engine: 'default',
    price_level: '$',
    ranking: '#2 of 6388 Restaurants in Berlin',
    ranking_category: 'restaurant',
    ranking_denominator: '6388',
    ranking_geo: 'Berlin',
    ranking_geo_id: '187323',
    ranking_position: '2',
    rating: '5.0',
    raw_ranking: '4.712',
    subcategory: [{key: 'cafe', name: 'Café'}],
    timezone: 'Europe/Berlin',
    web_url: 'https://www.tripadvisor.com/Restaurant_Review-g187323-d8789766-Reviews-Cafe_Couscous_Vege-Berlin.html',
    website: 'http://cafe-couscous.de',
    write_review: 'https://www.tripadvisor.com/UserReview-g187323-d8789766-Cafe_Couscous_Vege-Berlin.html'
  }
];