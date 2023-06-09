import React from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./styles.css";
import Spinner from "../Spinner/Spinner";

const List = ({ places, type, setType, loading }) => {
  return (
    <div className="container">
      <h2>Restaurants, hotels & tourist attractions</h2>
      {loading ? (
        <div className="loading">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="form-control">
            <label id="type"></label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select>
          </div>
          <div className="list">
            {places?.map((place, i) => (
              <PlaceDetails place={place} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default List;
