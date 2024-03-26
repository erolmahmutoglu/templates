import { Popup, Marker } from "mapbox-gl";

export const generateNewMarker = ({ lat, lng, map, title, color }) => {
  const popUp = new Popup({
    closeOnClick: false,
    closeButton: false,
    anchor: "bottom",
  }).setHTML(`
    <div class="flex flex-col items-center justify-center p-1 rounded-md">
      <p class="text-xs text-center font-semibold text-slate-800">${title}</p>
      </div>`);

  new Marker({ color, scale: 1.5 })
    .setLngLat([lng, lat])
    .setPopup(popUp)
    .addTo(map)
    .togglePopup();
};
