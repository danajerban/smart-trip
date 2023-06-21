import PlaceDetails from "../PlaceDetails/PlaceDetails";
import './List.css'
import Spinner from "../Spinner/Spinner";
import { Place } from "@/src/types";
import { SetStateAction } from "react";
import React from "react";

type ListParams = {
  places: Place[]
  type: string
  setType: React.Dispatch<SetStateAction<string>>
  loading: boolean
}

const List = ({ places, type, setType, loading}: ListParams) => {
  return (
    <div className='container'>
      <h2 className='hWhat'>What are you looking for ?</h2>
      {loading ? (
        <div className='loading'>
          <Spinner/>
        </div>
      ) : (
        <>
          <div className='formControl'>
            <label id='type'></label>
            <select data-testid='type' value={type} onChange={(e) => setType(e.target.value)}>
              <option value="restaurants">Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="attractions">Attractions</option>
            </select>
          </div>
          <div className='list'>
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
