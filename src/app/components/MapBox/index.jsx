"use client";

import { useRef } from "react";
import { useMap } from "./useMap";
import styles from "./MapBox.module.css";

import "mapbox-gl/dist/mapbox-gl.css";

const MapView = ({ title, position, accessToken, color = "#b91c1c" }) => {
  const mapRef = useRef(null);
  useMap(mapRef, position, title, accessToken, color);

  return (
    <section className={styles.container}>
      <div ref={mapRef} className={styles.map} />
    </section>
  );
};

export default MapView;
