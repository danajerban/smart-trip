import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { getPlacesData } from "./TravelAdvisorAPI";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState("restaurants");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <>
      <Header setCoordinates={setCoordinates} />
      <div className="main-container">
        <div className="list-container">
          <List
            places={places}
            type={type}
            setType={setType}
            loading={loading}
          />
        </div>
        <div className="map-container">
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
          />
        </div>
      </div>
    </>
  );
}
export default App;
