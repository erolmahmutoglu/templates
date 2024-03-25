"use client";

import { useRef } from "react";
import { useMap } from "./useMap";

import "mapbox-gl/dist/mapbox-gl.css";

const MapView = ({ popupContent, position }) => {
  const mapRef = useRef(null);
  useMap(mapRef, position, popupContent);

  return (
    <div className="w-full h-96 mx-auto">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default MapView;
