import styles from "./styles.module.css"
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
    <div className={styles.navBar}>
      <div className={styles.navBarTitle} onClick={() => navigate('/')}>
        <HomeIcon 
          data-testid='home-icon'
          fill="white"
          width='36px'
          height='36px'
        />
      </div>
      <div className={styles.navBarSearch} data-testid='search-bar'>
        <Search 
          setCoordinates={setCoordinates}
          setSelectedSearch={setSelectedSearch} 
        />
      </div>
    </div>
  );
};
export default Header;
