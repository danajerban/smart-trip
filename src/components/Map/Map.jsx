import React, { useCallback, useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import { FaInfoCircle } from "react-icons/fa";
import mapStyles from "./mapStyling";
import Styles from "./styles.module.css";

const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  selectedSearch,
}) => {
  const options = {
    styles: mapStyles,
  };
  const containerStyle = {
    height: "79vh",
    width: "100%",
  };
  //const defaultCenter = { lat: 51.5084443515244, lng: -0.12495369221152451 };
  const defaultCenter = { lat: 52.52477179506519, lng: 13.397221820955055 };
  const [center, setCenter] = useState(defaultCenter);

  const [selectedMarker, setSelectedMarker] = useState(undefined);
//load map - important
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    libraries: ["places"],
    googleMapsApiKey: "GOOGLE_MAPS_API_KEY",
  });

  const [map, setMap] = useState(null);
  const mapRef = useRef();
//refer to docs from @react-google-maps-api
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    const padding = 0.1;
    bounds.extend(
      new window.google.maps.LatLng(
        defaultCenter.lat + padding,
        defaultCenter.lng + padding
      )
    );
    bounds.extend(
      new window.google.maps.LatLng(
        defaultCenter.lat - padding,
        defaultCenter.lng - padding
      )
    );
    map.fitBounds(bounds);

    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
//set bounds/coordinates to fetch data
    setCenter(defaultCenter);
    setCoordinates({ lat: defaultCenter.lat, lng: defaultCenter.lng });
    setBounds({
      ne: { lat: ne.lat(), lng: ne.lng() },
      sw: { lat: sw.lat(), lng: sw.lng() },
    });

    mapRef.current = map;
  }, []);

  const panTo = useCallback(
    ({ lat, lng }) => {
      if (mapRef.current) {
        const newCenter = { lat, lng };
        const newZoom = 12;

        mapRef.current.panTo(newCenter);
        mapRef.current.setZoom(newZoom);

        const bounds = mapRef.current.getBounds();
        const ne = bounds.getNorthEast();
        const sw = bounds.getSouthWest();
//get the new bounds to fetch new data
        setCenter(newCenter);
        setCoordinates(newCenter);
        setBounds({
          ne: { lat: ne.lat(), lng: ne.lng() },
          sw: { lat: sw.lat(), lng: sw.lng() },
        });
      }
    },
    [setCoordinates, setBounds]
  );

  useEffect(() => {
    if (selectedSearch) {
      panTo(selectedSearch);
    }
  }, [selectedSearch, panTo]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      options={options}
      onUnmount={onUnmount}
    >
      {places?.map((place) => (
        <Marker
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
        <InfoWindow
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
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
