import PlaceDetails from "../PlaceDetails/PlaceDetails";
import styles from "./styles.module.css"
import Spinner from "../Spinner/Spinner";
import { Place } from "@/src/types";
import { SetStateAction } from "react";

type ListParams = {
  places: Place[]
  type: string
  setType: React.Dispatch<SetStateAction<string>>
  loading: boolean
}

const List = ({ places, type, setType, loading}: ListParams) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.hWhat}>What are you looking for ?</h2>
      {loading ? (
        <div className={styles.loading}>
          <Spinner />
        </div>
      ) : (
        <>
          <div className={styles.formControl}>
            <label id="type"></label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select>
          </div>
          <div className={styles.list}>
            {places?.map((place, i) => (
              <PlaceDetails place={place} key={i}/>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default List;
