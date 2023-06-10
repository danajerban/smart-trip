import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.css";
import Search from "../Search/Search";

const Header = ({ setCoordinates, setSelectedSearch }) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-title">
        <h1>Smart Trip</h1>
      </div>

      <div className="nav-bar-search">


        <div>
          <Search setCoordinates={setCoordinates} setSelectedSearch={setSelectedSearch} />
        </div>
      </div>
    </div>
  );
};
export default Header;
