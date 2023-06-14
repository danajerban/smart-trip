import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import { ReactComponent as HomeIcon } from '../../assets/svg/homeIcon.svg'

const Header = ({ setCoordinates, setSelectedSearch }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarTitle} onClick={() => navigate('/')}>
      <HomeIcon
      fill="white"
              width='36px'
              height='36px'
            />
      </div>

      <div className={styles.navBarSearch}>


        <div>
        <Search setCoordinates={setCoordinates} setSelectedSearch={setSelectedSearch} />
        </div>
      </div>
    </div>
  );
};
export default Header;
