"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";

import styles from "./LeafletMap.module.css";

export default function Map({
  dimension: { height = "400px", width = "100%" },
  title,
  position,
  zoom,
}) {
  return (
    <MapContainer
      preferCanvas={true}
      center={[position.lat, position.lng]}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height, width }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker draggable={true} position={[position.lat, position.lng]}>
        <Tooltip
          permanent={true}
          direction="top"
          offset={[-15, -15]}
          className={styles.tooltip}
        >
          <p className={styles.title}>{title}</p>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
