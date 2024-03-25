"use client";

import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

const MarkerWithInfowindow = ({
  name = "Example Hotel",
  position = { lat: 36, lng: 36 },
}) => {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={position}
        title={"Hotel Location Map"}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          <p className="  font-medium text-nowrap text-slate-800">{name}</p>
        </InfoWindow>
      )}
    </>
  );
};

function Maps({ name = "Example Hotel", position = { lat: 36, lng: 36 } }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="w-full h-96">
      <APIProvider apiKey={apiKey}>
        <Map defaultCenter={position} defaultZoom={15}>
          <Marker position={position} />
          <MarkerWithInfowindow name={name} position={position} />
        </Map>
      </APIProvider>
    </div>
  );
}

export default Maps;
