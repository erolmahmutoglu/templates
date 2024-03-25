import { Map } from "mapbox-gl";

const token = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

export const initMap = (container, coords) => {
  const map = new Map({
    container,
    style: "mapbox://styles/mapbox/dark-v10",
    pitchWithRotate: false,
    center: coords,
    zoom: 15,
    accessToken: token,
    doubleClickZoom: false,
  });
  return map;
};
