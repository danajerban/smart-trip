import React from "react";
import GoogleMap from "google-map-react";
import Marker from "google-map-react";
import { FaInfoCircle } from "react-icons/fa";
import mapStyles from "./mapStyling";
import "./styles.css";
const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
  const isValidCoordinates = (lat, lng) => {
    return (
      typeof lat === "number" &&
      typeof lng === "number" &&
      lat >= -90 &&
      lat <= 90 &&
      lng >= -180 &&
      lng <= 180
    );
  };
  //console.log(places)
  return (
    <div className="map-container">
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
          
        }}
        onChange={(e) => {
          //console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        <>
          {places?.map((place, i) => {
            //console.log({place})
            let lat = Number(place.latitude);
            let lng = Number(place.longitude);
            console.log({ lat, lng });
            return (
              <div
                key={i}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
              >
                <FaInfoCircle className="info-circle" />
              </div>
            );
          })}
        </>
      </GoogleMap>
    </div>
  );
};

export default Map;
