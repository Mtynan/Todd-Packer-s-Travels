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
import { IMarker } from "../interfaces/IMarker";

type Props = {
  markers?: IMarker[];
};

const Map = ({ markers }: Props): JSX.Element => {
  const center = useMemo(() => ({ lat: 53.483959, lng: -2.244644 }), []);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GMAPS_API_KEY!,
  });
  debugger;
  return (
    <>
      {!isLoaded ? (
        <>Loading map..</>
      ) : (
        
        <>
        
        <GoogleMap
          data-testId="MaptestId"
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        >
          {markers?.map(({ from, to, id, path, colour, directions }) => (
            <>
              <MarkerF key={`${id}_from`} position={from} >
           
              </MarkerF>
              <MarkerF key={`${id}_to`} position={to}></MarkerF>
              {/* <DistanceMatrixService
                options={{
                  destinations: [from],
                  origins: [to],
                  travelMode: google.maps.TravelMode.DRIVING,
                  
                }}
                callback={(response) => {
                  console.log(response);
                }} */}

              {/* /> */}
              <DirectionsRenderer
                directions={directions ?? undefined}
                options={{
                  suppressMarkers: true,
                  polylineOptions: { 
                    strokeColor: colour,
                  },
                }}
              />
            </>
          ))}
        </GoogleMap>
        </>
       
      )}
    </>
  );
};

export default Map;
