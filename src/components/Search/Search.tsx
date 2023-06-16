import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useState, ChangeEvent } from "react";
import styles from "./styles.module.css";

type Suggestion = google.maps.places.AutocompletePrediction

const Search = ({ setCoordinates, setSelectedSearch }) => {

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

  const handleSelect = ({description}: Suggestion) => () => {
    setValue(description, false);
    dismissSuggestions();
    // const address = description;
    // try {
    //   const results = await getGeocode({ address });
    //   const { lat, lng } = getLatLng(results[0]);
    //   setSelectedSearch({ lat, lng });
    //   setCoordinates({ lat, lng });
    // } catch (error) {
    //   console.error("Error: ", error);
    // }
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
          onClick={handleSelect(suggestion)}
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
