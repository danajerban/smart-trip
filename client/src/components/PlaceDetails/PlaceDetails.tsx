import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./styles.module.css"
import { Place } from "@/src/types";
type PlaceDetailsProps = {
  place: Place
}

const PlaceDetails = ({ place }: PlaceDetailsProps) => {

  return (
    <div data-testid='place-details' className={styles.placeCard}>
      <div
        className={styles.cardMedia}
        style={{
          backgroundImage: `url(${
            place.photo
              ? place.photo.images.large.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          })`,
        }}
        title={place.name}
      />
      <div className={styles.cardContent}>
        <h2 className={styles.placeName}>{place.name}</h2>
        <div className={styles.flexBetween}>
          
        </div>
        <div className={styles.flexBetween}>
          <h3>Rating</h3>
          <h3>
            {place.rating} out of {place.num_reviews} reviews
          </h3>
        </div>
        {place?.cuisine?.map(({ name }) => (
          <div data-testid='cuisine' key={name} className={styles.chip}>
            {name}
          </div>
        ))}
        {place?.address && (
          <h4 className={`${styles.subtitle}, ${styles.flexBetween}`}>
            <FaMapMarkerAlt />
            {place.address}
          </h4>
        )}
        {place?.phone && (
          <h4 className={`${styles.spacing}, ${styles.flexBetween}`}>
            <FaPhoneAlt />
            {place.phone}
          </h4>
        )}
        <div className={styles.cardActions}>
          <button onClick={() => window.open(place.web_url, "_blank")}>
            Trip Advisor
          </button>
          <button onClick={() => window.open(place.website, "_blank")}>
            Website
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlaceDetails;
