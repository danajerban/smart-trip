import { FieldValue } from "firebase/firestore";

export interface Place {
  address: string;
  address_obj: {
    city: string;
    country: string;
    postalcode: string;
    state: null | string;
    street1: string;
    street2: null | string;
  };
  ancestors: {
    abbrv: null;
    location_id: string;
    name: string;
    subcategory: {
      key: string
      , name: string
    }[];
  }[];
  awards: any[]; // Update the type if you have information about the structure
  bearing: string;
  category: {
    key: string;
    name: string;
  };
  cuisine: {
    key: string;
    name: string;
  }[];
  description: string;
  dietary_restrictions: {
    key: string;
    name: string;
  }[];
  distance: string;
  distance_string: string;
  doubleclick_zone: string;
  establishment_types: {
    key: string;
    name: string;
  }[];
  is_candidate_for_contact_info_suppression: boolean;
  is_closed: boolean;
  is_jfy_enabled: boolean;
  is_long_closed: boolean;
  latitude: string;
  location_id: string;
  location_string: string;
  longitude: string;
  name: string;
  nearest_metro_station: any[]; // Update the type if you have information about the structure
  num_reviews: string;
  parent_display_name: string;
  phone: string;
  photo: {
    caption: string;
    helpful_votes: string;
    id: string;
    images: {
      large: {
        height: string;
        url: string;
        width: string;
      };
      medium: {
        height: string;
        url: string;
        width: string;
      };
      original: {
        height: string;
        url: string;
        width: string;
      };
      small: {
        height: string;
        url: string;
        width: string;
      };
      thumbnail: {
        height: string;
        url: string;
        width: string;
      };
    };
    is_blessed: boolean;
    published_date: string;
    uploaded_date: string;
  };
  user: {
    member_id: string;
    type: string;
    user_id: null;
  };
  preferred_map_engine: string;
  price_level: string;
  ranking: string;
  ranking_category: string;
  ranking_denominator: string;
  ranking_geo: string;
  ranking_geo_id: string;
  ranking_position: string;
  rating: string;
  raw_ranking: string;
  subcategory: {
    key: string,
    name: string
  }[]; 
  timezone: string;
  web_url: string;
  website: string;
  write_review: string;
}

export type Type = 'restaurants' | 'hotels' | 'attractions'

export interface Coordinates {
  lat: number
  lng: number
}

export interface Bounds {
  ne: { lat: number, lng: number },
  sw: { lat: number, lng: number },
}

export interface UserData {
  name: string
  email: string
  timestamp?: FieldValue
}