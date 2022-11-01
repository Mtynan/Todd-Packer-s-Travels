import {
  GoogleMap,
  Polyline,
  MarkerF,
  useLoadScript,
  DistanceMatrixService,
  DirectionsRenderer,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { Button } from "semantic-ui-react";
import { IMarker } from "../interfaces/IMarker";

type Props = {
  markers?: IMarker[];
};

const Map = ({ markers }: Props): JSX.Element => {
  const [showPolyLine, setShowPolyLine] = useState<boolean>(false);
  const center = useMemo(() => ({ lat: 53.483959, lng: -2.244644 }), []);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY!,
  });
  const [polyOnMap, setPolyOnMap] = useState<google.maps.Polyline[]>([]);
  const [directionsOnMap, setDirectionsOnMap] = useState<
    google.maps.DirectionsRenderer[]
  >([]);

  const addPoly = (p: google.maps.Polyline) => {
    setPolyOnMap((prev) => [...prev, p]);
  };

  const addDirection = (d: google.maps.DirectionsRenderer) => {
    setDirectionsOnMap((prev) => [...prev, d]);
  };

  const showPoly = () => {
    if(showPolyLine){
      removePoly();
    } else {
      removeDirections();
    }
    setShowPolyLine((prev) => !prev);
  };
  const removePoly = () => {
    polyOnMap.forEach((x) => x.setMap(null));
    setPolyOnMap([]);
  };
  const removeDirections = () => {
    directionsOnMap.forEach((x) => x.setMap(null));
    directionsOnMap.forEach((x) => x.setPanel(null));
    setDirectionsOnMap([]);
  };
  return (
    <>
      {!isLoaded ? (
        <>Loading map..</>
      ) : (
        <>
          <Button onClick={showPoly}>
            {showPolyLine ? "toggle directions" : "toggle polyline"}
          </Button>
          <GoogleMap
            data-testId="MaptestId"
            zoom={10}
            center={center}
            mapContainerClassName="map-container"
          >
            {markers?.map(({ from, to, id, path, colour, directions }) => (
              <>
                {console.log(path)}
                <MarkerF key={`${id}_from`} position={from}></MarkerF>

                <MarkerF key={`${id}_to`} position={to}></MarkerF>
                {showPolyLine ? (
                  <Polyline
                    path={path}
                    options={{ strokeColor: colour }}
                    onLoad={(e) => addPoly(e)}
                  />
                ) : (
                  <DirectionsRenderer
                    onLoad={(e) => addDirection(e)}
                    directions={directions ?? undefined}
                    options={{
                      suppressMarkers: true,
                      polylineOptions: {
                        strokeColor: colour,
                      },
                    }}
                  />
                )}
              </>
            ))}
          </GoogleMap>
        </>
      )}
    </>
  );
};

export default Map;
