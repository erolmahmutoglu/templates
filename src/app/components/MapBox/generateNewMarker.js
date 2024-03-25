import { Popup, Marker, Map } from "mapbox-gl";

export const generateNewMarker = ({ lat, lng, map, popupContent }) => {
  const popUp = new Popup({
    closeOnClick: false,
    closeButton: false,
    anchor: "bottom",
  }).setHTML(`
    <div class="flex flex-col items-center justify-center">
      <p class="text-xs text-center font-semibold text-slate-800">${popupContent}</p>
      </div>`);

  new Marker({ color: "#b91c1c", scale: 1.5 })
    .setLngLat([lng, lat])
    .setPopup(popUp)
    .addTo(map)
    .togglePopup();
};
