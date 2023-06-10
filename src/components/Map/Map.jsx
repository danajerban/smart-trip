import React, { useCallback, useState,useEffect, useRef } from "react";

import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";
import { FaInfoCircle } from "react-icons/fa";
import mapStyles from "./mapStyling";
import "./styles.css";
const Map = ({ coordinates, setCoordinates, setBounds, places, selectedSearch }) => {
  const options = {
    styles: mapStyles,
  };
  const containerStyle = {
    height: "85vh",
    width: "100%",
  };
  const center = { lat: 51.5084443515244, lng: -0.12495369221152451 };

  const [selectedMarker, setSelectedMarker] = useState(undefined);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    libraries: ["places"],
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const [map, setMap] = useState(null);
  const mapRef = React.useRef();
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    const padding = 0.1;
    // Extend the bounds with additional latitude and longitude values
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

    mapRef.current = map;
  }, []);


  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(12);
  }, []);

  useEffect(() => {
    if (selectedSearch && mapRef.current) {
      panTo(selectedSearch);
    }
  }, [selectedSearch, panTo]);

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
            place === selectedMarker
              ? setSelectedMarker(undefined)
              : setSelectedMarker(place);
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindowF
          position={{
            lat: Number(selectedMarker.latitude),
            lng: Number(selectedMarker.longitude),
          }}
          zIndex={1}
          options={{
            pixelOffset: {
              width: 0,
              height: -40,
            },
          }}
          onCloseClick={() => setSelectedMarker(undefined)}
        >
          <div>
            <h3>{selectedMarker.name}</h3>
            <p>{selectedMarker.address}</p>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>

  ) : (
    <></>
  );
};

export default Map;
