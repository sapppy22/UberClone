import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FwcHkyMiIsImEiOiJjbTI4NmVucHcwNWR0MmxxeTM2YTI1cWhxIn0.rYCHuIOVXWmmrlgMjrc_XQ";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [78.9629, 20.5937], // Default center
      zoom: 6,
    });

    // Create an array to hold all coordinates
    const coordinatesArray = [];

    // Add pickup marker if available
    if (props.pickupCoordinates) {
      console.log("Pickup Coordinates:", props.pickupCoordinates); // Log for debugging
      coordinatesArray.push(props.pickupCoordinates);
      addToMap(map, props.pickupCoordinates);
    }

    // Add dropoff marker if available
    if (props.dropoffCoordinates) {
      console.log("Dropoff Coordinates:", props.dropoffCoordinates); // Log for debugging
      coordinatesArray.push(props.dropoffCoordinates);
      addToMap(map, props.dropoffCoordinates);
    }

    // Fit the map bounds to the markers if both are available
    if (coordinatesArray.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      coordinatesArray.forEach((coords) => bounds.extend(coords));
      map.fitBounds(bounds, { padding: 60 });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    console.log("Adding Marker at:", coordinates); // Log for debugging
    new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1 h-full
`;
