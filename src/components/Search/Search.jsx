import React from "react";
//combobox and use-place-autocomplete from google platform tutorials on youtube

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import styles from "./styles.module.css";
const Search = ({ setCoordinates, setSelectedSearch }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
// this autocomplete is the reason why we are loading the script in the index.html
// because it gives a error: google is not defined due to rendering issues before getting the data from google maps library "places"


  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
//convert the address to lat lng to pan the map to that location
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setSelectedSearch({ lat, lng });
      setCoordinates({ lat, lng });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.comboboxInput}
          placeholder="Search an address"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </>
  );
};

export default Search;
