import { useCallback, useState, useEffect, useRef, SetStateAction, useMemo } from 'react';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import { mapStyling } from './mapStyling';
import { Coordinates, Place, Bounds } from '@/src/types';

type MapProps = {
  setCoordinates: React.Dispatch<SetStateAction<Coordinates>>,
  setBounds: React.Dispatch<SetStateAction<Bounds>>,
  places: Place[],
  selectedSearch: Coordinates | null
}

const Map = ({
  setCoordinates,
  setBounds,
  places,
  selectedSearch,
}: MapProps) => {
  const options = {
    styles: mapStyling,
  };

  const containerStyle = {
    height: '79vh',
    width: '100%',
  };

  const defaultCenter = useMemo(() => ({ lat: 52.52477179506519, lng: 13.397221820955055 }),[]);
  const [center, setCenter] = useState(defaultCenter);
  const [selectedMarker, setSelectedMarker] = useState<Place | undefined>(undefined);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    libraries: ['places'],
    googleMapsApiKey: 'AIzaSyBJaDkaLJDA24bXZuvfpRgwIEwzvu5o5KA',
  });

  const [map, setMap] = useState(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const onLoad = useCallback(
    function callback(map: google.maps.Map) {
      const bounds = new window.google.maps.LatLngBounds();
      console.log(bounds)
      const padding = 0.1;
      bounds.extend(
        new window.google.maps.LatLng(
          defaultCenter.lat + padding,
          defaultCenter.lng + padding
        )
      );
      bounds.extend(
        new window.google.maps.LatLng(
          defaultCenter.lat - padding,
          defaultCenter.lng - padding
        )
      );
      map.fitBounds(bounds);

      const ne = bounds.getNorthEast();
      const sw = bounds.getSouthWest();

      setCenter(defaultCenter);
      setCoordinates({ lat: defaultCenter.lat, lng: defaultCenter.lng });
      setBounds({
        ne: { lat: ne.lat(), lng: ne.lng() },
        sw: { lat: sw.lat(), lng: sw.lng() },
      });

      console.log({ne: { lat: ne.lat(), lng: ne.lng() },
      sw: { lat: sw.lat(), lng: sw.lng() }})

      mapRef.current = map;
    },
    [defaultCenter, setCoordinates, setBounds]
  );

  const panTo = useCallback(
    ({ lat, lng }: Coordinates) => {
      if (mapRef.current !== null) {
        const newCenter = { lat, lng };
        const newZoom = 12;

        mapRef.current.panTo(newCenter);
        mapRef.current.setZoom(newZoom);

        const bounds = mapRef.current.getBounds();
        const ne = bounds!.getNorthEast();
        const sw = bounds!.getSouthWest();

        setCenter(newCenter);
        setCoordinates(newCenter);
        setBounds({
          ne: { lat: ne.lat(), lng: ne.lng() },
          sw: { lat: sw.lat(), lng: sw.lng() },
        });
      }
    },
    [setCoordinates, setBounds]
  );

  useEffect(() => {
    if (selectedSearch) {
      panTo(selectedSearch);
    }
  }, [selectedSearch, panTo]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      options={options}
      onUnmount={onUnmount}
    >
      {places?.map((place) => (
        <Marker
          key={`0${place.name}`}
          position={{
            lat: Number(place.latitude),
            lng: Number(place.longitude),
          }}
          onClick={() => {
            place === selectedMarker
              ? setSelectedMarker(undefined)
              : setSelectedMarker(place);
          }}
        />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: Number(selectedMarker.latitude),
            lng: Number(selectedMarker.longitude),
          }}
          zIndex={1}
          options={{
            pixelOffset: new google.maps.Size(0, -40)
            }
          }
          onCloseClick={() => setSelectedMarker(undefined)}
        >
          <div>
            <h3>{selectedMarker.name}</h3>
            <p>{selectedMarker.address}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;

