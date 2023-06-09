import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./styles.css";

const PlaceDetails = ({ place }) => {
  return (
    <div className="place-card">
      <div
        className="card-media"
        style={{
          backgroundImage: `url(${
            place.photo
              ? place.photo.images.large.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          })`,
        }}
        title={place.name}
      />
      <div className="card-content">
        <h2 className="place-name">{place.name}</h2>
        <div className="flex-between">
          <h3>Price</h3>
          <h3>{place.price_level}</h3>
        </div>
        <div className="flex-between">
          <h3>Rating</h3>
          <h3>
            {place.rating} out of {place.num_reviews} reviews
          </h3>
        </div>
        {place?.cuisine?.map(({ name }) => (
          <div key={name} className="chip">
            {name}
          </div>
        ))}
        {place?.address && (
          <h4 className="subtitle flex-between">
            <FaMapMarkerAlt />
            {place.address}
          </h4>
        )}
        {place?.phone && (
          <h4 className="spacing flex-between">
            <FaPhoneAlt />
            {place.phone}
          </h4>
        )}
        <div className="card-actions">
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
