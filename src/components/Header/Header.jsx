import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { FaSearch } from "react-icons/fa";
import "./styles.css";

const Header = ({ setCoordinates }) => {
  const [autoComplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    if (autoComplete) {
      if (autoComplete.getPlace().geometry) {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();
        setCoordinates({ lat, lng });
      } else {
        setCoordinates({});
      }
    }
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-title">
        <h1>Smart Trip</h1>
      </div>
      <div className="nav-bar-search">
        <h4>Explore</h4>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className="search">
            <div className="searchIcon">
              <FaSearch />
            </div>
            <input className="input" placeholder="Search…" />
          </div>
        </Autocomplete>
      </div>
    </div>
  );
};
export default Header;
