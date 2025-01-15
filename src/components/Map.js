import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ location, attractions }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = location
    ? { lat: location.lat, lng: location.lng }
    : { lat: 0, lng: 0 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB481IL4ZxlW9g8HrpFGOJ1pdJafQj1YjQ">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        options={{
          scrollwheel: true,
          draggable: true,
        }}
      >
        {location && <Marker position={center} />}
        {attractions &&
          attractions.map((attraction, index) => (
            <Marker
              key={index}
              position={{
                lat: attraction.geometry.location.lat,
                lng: attraction.geometry.location.lng,
              }}
              title={attraction.name}
            />
          ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
