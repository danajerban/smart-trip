import React, { useCallback, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { FaInfoCircle } from "react-icons/fa";
import mapStyles from "./mapStyling";
import "./styles.css";
const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
  const options = {
    styles: mapStyles
  }
  const containerStyle = {
    height: "85vh",
    width: "100%",
  };
  const center = { lat: 51.5084443515244, lng: -0.12495369221152451 };

  const [selectedPlace, setSelectedPlace] = useState(undefined);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });
  const [map, setMap] = useState(null);
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    const padding = 0.1;
    // Extend bounds
    bounds.extend(
      new window.google.maps.LatLng(center.lat + padding, center.lng + padding)
    );
    bounds.extend(
      new window.google.maps.LatLng(center.lat - padding, center.lng - padding)
    );
    map.fitBounds(bounds);
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();

    setCoordinates({ lat: map.getCenter().lat(), lng: map.getCenter().lng() });
    setBounds({
      ne: { lat: ne.lat(), lng: ne.lng() },
      sw: { lat: sw.lat(), lng: sw.lng() },
    });

    setMap(map);
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
    options={options}
    >
      {places?.map((place) => (
        <MarkerF
          key={`0${place.name}`}
          position={{
            lat: Number(place.latitude),
            lng: Number(place.longitude),
          }}
          onClick={() => {
            place === selectedPlace
              ? setSelectedPlace(undefined)
              : setSelectedPlace(place);
          }}
        />
      ))}
      {selectedPlace && (
        <InfoWindowF
          position={{
            lat: Number(selectedPlace.latitude),
            lng: Number(selectedPlace.longitude),
          }}
          zIndex={1}
          options={{
            pixelOffset: {
              width: 0,
              height: -40,
            },
          }}
          onCloseClick={() => setSelectedPlace(undefined)}
        >
          <div>
            <h3>{selectedPlace.name}</h3>
            <p>{selectedPlace.address}</p>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
