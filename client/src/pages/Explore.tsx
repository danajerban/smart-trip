import React, { useEffect, useState } from "react";
import { getPlacesData } from "../TravelAdvisorAPI";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import Map from "../components/Map/Map";
import { Coordinates, Place, Bounds } from "../types";

function Explore() {

  const [places, setPlaces] = useState<Place[]>([]);
  const [bounds, setBounds] = useState<Bounds>(
    {ne:{lat: 52.62477179506519,lng: 13.497221820955055},
    sw:
    {lat :52.42477179506519,
    lng : 13.297221820955055}});
  const [coordinates, setCoordinates] = useState({});
  const [type, setType] = useState("restaurants");
  const [loading, setLoading] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setLoading(true);
      getPlacesData(type, bounds).then((data) => {
        console.log(data)
        setPlaces(data?.filter((place: Place) => place.name && Number(place.num_reviews) > 0));
        setLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <>
      <Header
        setCoordinates={setCoordinates}
        setSelectedSearch={setSelectedSearch}
      />
      <div className="explore-main-container">
        <div className="explore-list-container">
          <List
            places={places}
            type={type}
            setType={setType}
            loading={loading}
          />
        </div>
        <div className="explore-map-container">
          <Map
            selectedSearch={selectedSearch}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            places={places}
          />
        </div>
      </div>
    </>
  );
}
export default Explore;
