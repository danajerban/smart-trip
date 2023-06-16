import { useEffect, useState } from "react";
import { getPlacesData } from "../TravelAdvisorAPI";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import Map from "../components/Map/Map";

function Explore() {
  //explore is basically the "app" component of all the components that are in folders
  const [places, setPlaces] = useState([]);
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState("restaurants");
  const [loading, setLoading] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState(null);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        console.log(data?.filter((place) => place.name && place.num_reviews > 0));
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
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
            coordinates={coordinates}
            places={places}
          />
        </div>
      </div>
    </>
  );
}
export default Explore;
