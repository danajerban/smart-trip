import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useState, ChangeEvent, SetStateAction } from "react";
import styles from "./styles.module.css";
import { Coordinates } from "@/src/types";

type Suggestion = google.maps.places.AutocompletePrediction

type SearchParams = {
  setCoordinates: React.Dispatch<SetStateAction<Coordinates>>
  setSelectedSearch: React.Dispatch<SetStateAction<Coordinates | null>>
}

const Search = ({ setCoordinates, setSelectedSearch }: SearchParams) => {
  const [currIndex, setCurrIndex] = useState<number | null>(null);
  
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  // const hasSuggestions = status === "OK";

  const dismissSuggestions = () => {
    setCurrIndex(null);
    clearSuggestions();
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

  const handleSelect = ({description}: Suggestion) => {
    setValue(description, false);
    dismissSuggestions();
    const getCoordinates = async () => {
      try {
        const results = await getGeocode( { address: description });
        console.log(results)
        const { lat, lng } = getLatLng(results[0]);
        setSelectedSearch({ lat, lng });
        setCoordinates({ lat, lng });
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    getCoordinates();
  };

  const renderSuggestions = (): JSX.Element => {
    const suggestions = data.map((suggestion: Suggestion, idx: number) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text},
      } = suggestion;
      return (
        <li 
          key={place_id}
          id={`list-item-${idx}`}
          onClick={() => handleSelect(suggestion)}
          role="option"
          aria-selected={idx === currIndex}
        >
          <strong>{main_text}</strong>
          <small>{secondary_text}</small>
        </li>
      );
    });

    return (
      <>
        {suggestions}
      </>
    )
  }

  return (
    <>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search an address"
        type="text"
        className={styles.input}
        data-testid ='search-bar'
      />
      {status === "OK" && (
        <>
          <ul
            id="list-box"
          >
            {renderSuggestions()}
          </ul>
        </>
      )}
    </>
  );
}

export default Search;
