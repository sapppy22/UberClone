import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FwcHkyMiIsImEiOiJjbTI4NmVucHcwNWR0MmxxeTM2YTI1cWhxIn0.rYCHuIOVXWmmrlgMjrc_XQ";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // Make sure the container ID is "map"
      style: "mapbox://styles/mapbox/streets-v11", // Ensure this style exists in your Mapbox account
      center: [78.9629, 20.5937], // Coordinates for the map's initial center
      zoom: 6, // Initial zoom level
    });
  }, []); // Ensure the effect runs only once on component mount

  return <Wrapper id="map"></Wrapper>; // The div that will hold the map
};

export default Map;

const Wrapper = tw.div`
  flex-1 h-full // Added h-full to ensure the map container takes up full height
`;
