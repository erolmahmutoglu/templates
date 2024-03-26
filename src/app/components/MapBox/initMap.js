import { Map } from "mapbox-gl";

export const initMap = (container, coords, accessToken) => {
  const map = new Map({
    container,
    style: "mapbox://styles/mapbox/streets-v11",
    pitchWithRotate: false,
    center: coords,
    zoom: 15,
    accessToken,
    doubleClickZoom: false,
  });
  return map;
};
