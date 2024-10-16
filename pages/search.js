import React from "react";
import tw from "tailwind-styled-components";
const search = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </ButtonContainer>
      <TextContainer>Plan your ride</TextContainer>
      <Boxcontainer>
        <Pickup>
          <Pick src="https://img.icons8.com/ios-filled/50/ffffff/clock--v1.png" />
          Pickup now
        </Pickup>
        <Forme>
          <Me src="https://img.icons8.com/ios-filled/50/ffffff/user--v1.png" />
          For me
        </Forme>
      </Boxcontainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANMPMS1Ix8TvKUL5Hv3ZxgD36OHIOJnojpA&s" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://static.vecteezy.com/system/resources/previews/011/888/167/non_2x/neumorphic-square-button-free-png.png" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios-filled/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Home>
        <HomeIcon src="https://img.icons8.com/ios-filled/50/ffffff/home--v1.png" />
        Home
      </Home>
      <Confirm>Confirm Location</Confirm>
    </Wrapper>
  );
};

export default search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
 flex flex-row bg-white px-4 
`;

const BackButton = tw.img`
h-12
`;

const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`;

const InputContainer = tw.div`
bg-white flex items-center px-4
`;

const Circle = tw.img`
h-2.5
`;

const Line = tw.img`
h-10
`;

const Square = tw.img`
h-3
`;

const InputBoxes = tw.div`
flex flex-col flex-1
`;

const Input = tw.input`
bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3

`;

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2 my-2
`;

const StarIcon = tw.img`
bg-gray-800 w-10 h-10 p-2 rounded-full mr-2
`;
const Home = tw.div`
flex items-center bg-white px-4 py-2 my-2
`;
const HomeIcon = tw.img`
bg-gray-800 w-10 h-10 p-2 rounded-full mr-2
`;
const TextContainer = tw.div`
bg-white text-center  text-xl
`;

const Boxcontainer = tw.div`
flex flex-row px-14 py-2 bg-white
`;
const Pickup = tw.div`
flex items-center bg-gray-200 h-10  px-4 py-2 rounded-full mr-4
`;
const Pick = tw.img`
bg-gray-800 w-6 h-6 mx-2  rounded-full
`;

const Forme = tw.div`
flex items-center bg-gray-200 h-10 px-4 py-2 rounded-full 
`;

const Me = tw.img`
bg-gray-800 w-6 h-6 mx-2 rouned-full
`;

const Confirm = tw.div`
bg-gray-800 text-white text-center px-4 py-2 mx-64
`;
