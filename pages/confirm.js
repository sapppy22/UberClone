import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./Components/Map";
import { useRouter } from "next/router";
import RideSelector from "./Components/RideSelector";
const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  console.log("Pickup", pickup);
  console.log("Dropoff", dropoff);

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();
  const [loading, setLoading] = useState(true);

  const getPickupCoordinates = (pickupLocation) => {
    fetch(`http://localhost:3001/geocode?location=${pickupLocation}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          setPickupCoordinates(data.features[0].center); // setCoordinates expects [lng, lat]
        }
      })
      .catch((error) => {
        console.error("Error fetching pickup data:", error);
      });
  };

  const getDropoffCoordinates = (dropoffLocation) => {
    fetch(`http://localhost:3001/geocode?location=${dropoffLocation}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          setDropoffCoordinates(data.features[0].center); // setCoordinates expects [lng, lat]
        }
      })
      .catch((error) => {
        console.error("Error fetching dropoff data:", error);
      });
  };

  useEffect(() => {
    if (pickup) {
      getPickupCoordinates(pickup);
    }
    if (dropoff) {
      getDropoffCoordinates(dropoff);
    }
  }, [pickup, dropoff]);

  // Check loading state once both coordinates are available
  useEffect(() => {
    if (pickupCoordinates && dropoffCoordinates) {
      setLoading(false);
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>; // Display loading message
  }

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl`;
const ConfirmButtonContainer = tw.div`
border-t-2
`;

const LoadingMessage = tw.div`
  flex-1 flex items-center justify-center text-xl
`;

const RideContainer = tw.div`
  flex-1 flex flex-col h-1/2
`;

const Wrapper = tw.div`
  flex h-screen flex-col
`;
