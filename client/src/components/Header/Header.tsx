import React from "react";
import './Header.css'
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import { ReactComponent as HomeIcon } from '../../assets/svg/homeIcon.svg'
import { SetStateAction } from "react";
import { Coordinates } from "@/src/types";

type HeaderProps = {
  setCoordinates: React.Dispatch<SetStateAction<Coordinates>>
  setSelectedSearch: React.Dispatch<SetStateAction<Coordinates | null>>
}

const Header = ({ setCoordinates, setSelectedSearch }: HeaderProps) => {
  const navigate = useNavigate()
  return (
    <div className='navBar'>
      <div  data-testid='home-icon' className='navBarTitle' onClick={() => navigate('/')}>
        <HomeIcon
          fill="white"
          width='36px'
          height='36px'
        />
      </div>
      <div className='navBarSearch'>
        <Search 
          setCoordinates={setCoordinates}
          setSelectedSearch={setSelectedSearch} 
        />
      </div>
    </div>
  );
};
export default Header;
