import { Popup, Marker } from "mapbox-gl";

import styles from "./MapBox.module.css";

export const generateNewMarker = ({ lat, lng, map, title, color }) => {
  const popUp = new Popup({
    closeOnClick: false,
    closeButton: false,
    anchor: "bottom",
  }).setHTML(`
    <div className=${styles.popup}>
      <p >${title}</p>
      </div>`);

  new Marker({ color, scale: 1.5 })
    .setLngLat([lng, lat])
    .setPopup(popUp)
    .addTo(map)
    .togglePopup();
};
