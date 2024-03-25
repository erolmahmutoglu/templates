"use client";

import { useEffect, useRef } from "react";
import { initMap } from "./initMap";
import { generateNewMarker } from "./generateNewMarker";

export const useMap = (container, position, popupContent) => {
  const mapInitRef = useRef(null);
  useEffect(() => {
    if (container.current) {
      mapInitRef.current = initMap(container.current, [
        position.lng,
        position.lat,
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    mapInitRef.current &&
      mapInitRef.current.on("dblclick", ({ lngLat }) =>
        generateNewMarker({ map: mapInitRef.current, popupContent, ...lngLat })
      );

    return () => {
      mapInitRef.current?.off("dblclick", generateNewMarker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    mapInitRef.current &&
      mapInitRef.current.on("load", () =>
        generateNewMarker({
          map: mapInitRef.current,
          popupContent,
          ...mapInitRef.current.getCenter(),
        })
      );

    return () => {
      mapInitRef.current?.off("load", generateNewMarker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
