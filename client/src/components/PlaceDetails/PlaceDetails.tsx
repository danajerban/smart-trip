import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import'./PlaceDetails.css'
import { Place } from "@/src/types";
import React from "react";
type PlaceDetailsProps = {
  place: Place
}

const PlaceDetails = ({ place }: PlaceDetailsProps) => {

  return (
    <div data-testid='place-details' className='placeCard'>
      <div
        className='cardMedia'
        style={{
          backgroundImage: `url(${
            place.photo
              ? place.photo.images.large.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          })`,
        }}
        title={place.name}
      />
      <div className='cardContent'>
        <h2 className='placeName'>{place.name}</h2>
        <div className='flexBetween'>

        </div>
        <div className='flexBetween'>
          <h3>Rating</h3>
          <h3>
            {place.rating} out of {place.num_reviews} reviews
          </h3>
        </div>
        {place?.cuisine?.map(({ name }) => (
          <div data-testid='cuisine' key={name} className='chip'>
            {name}
          </div>
        ))}
        {place?.address && (
          <h4 className={`spacing, flexBetween}`}>
            <FaMapMarkerAlt />
            {place.address}
          </h4>
        )}
        {place?.phone && (
          <h4 className={`spacing, flexBetween}`}>
            <FaPhoneAlt />
            {place.phone}
          </h4>
        )}
        <div className='cardActions'>
          <button onClick={() => window.open(place.web_url, "_blank")}>
            Trip Advisor
          </button>
          <button onClick={() => window.open(place.website, "_blank")}>
            Website
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlaceDetails;
