"use client";

import Map, { NavigationControl } from "./node_modules/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function TorontoMap() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden">
      <Map
        initialViewState={{
          longitude: -79.3832,
          latitude: 43.6532,
          zoom: 11,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={process.env.Mapbox_token}
      >
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}
