import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./Components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <Uberlogo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VDIpxpO555Lynh3l2m6w0CdhabUR00Nhbg&s" />
          <Profile>
            <Name>Saptarshi</Name>
            <UserImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXf39+oqKji4uKlpaWxsbHIyMjOzs7BwcGsrKzW1tajo6PR0dG8vLzc3NzZ2dm5ubmsfzqXAAAFIElEQVR4nO2d2ZqDIAxGJW5Qt/d/2xFb29qOrcuPCTbnbu56vgCBgJkkURRFURRFURRFURRFUZ4goqRpnauca5vhrzPR61R5Z41JrxiTdWWVnMWSyJXZxWtNSNNLVroTSFJb2je7h6Ut27gdyXWzeqNk5+J1JJddPurdJLNIHanpPofvybFrInSk3CwV9GM1j02Rmmy533WoxhVGqlYE8KZoqogUKV/rNzjGM1Kp3iLYK9aRKNLiNfRNsYtCcbtgJIpbh2g0ilTuEewVS+GKVOwT7BUL2YrtXsFeseWW+ATZ3YLGWMFB3DsJr0ieig4h2Cs6bpE5KIMIGpMJDeL+dXRE6npKID+PSMNtB4r/kXnMgGSKEZEZAzYLPRJnInVAQWME7sAbZAj7IDbcQq8g15nBUNxaA8v2I/KyPjaEfRC5hV6BrqSDYcGtNAVzqpgYCjthwKehvIkIFzSGW2kKoHrxirBqRhXAsOKWegad7wdDUTn/BwzhyUJauthXyp8xFHUTpYZqGIHh+Vea02cL/OFJ3PHp9Lu2H9h5Iyv6I6Km4Q+cgM9fxcAvNcIWmj6IcENhIURfW0i8uADnfGH5fgAqKK3S5sEeL2QdLG6AnprcDCU+OIEmfWHp/gYwJYpLhleAQZQZQuBMFDkLPXveP08E5WX7kQYiaIy4Vwp3MC/bJL6luYMYp4LH6MD+p1+WW+ELuws2wsoz71C15KPKeS7yv+/aVxwWVgb+nz2KUQh6xa0D9RKH4Pa0KDoRTiG3+hNST0yfdK/+DHj4EJj7V69jbYlYXAH4O+RWhDHSpgNULJyNqYllDX1jUdcB7xerYK+Y5POdTQa91OZJvH4eIlebGck0TeszdKjpJasyM+lE0/+VldUZ9K4QNS4vu8z646O1WVfmrjmP3g16dL+iszXCUhRFUVDQFO6fA2OQaVxVFPmUoqhcE3lm9D/e72Ts2BDyHWO7Oq/i7IRJ1Oa1vaRfmgpe22HaOm/jkqSkqu13uekpqq5iOUYRFd3ceemzpOmKCCI5HAdX290tjfADYx++bEP0ppHM5AaSKLeQO2Ars3BDyZpml18cjcDiDRWQ+N0drbA7jFXl34WOkorElNT7Ln5nHGspQ3VxbXu1ohEyVEEvof517LjlNl8VLlZkv1QM8dHaiyPvrQ3qrd5HRc6R2kBz4Kyi5bod7qfgUfBMRgrwzeEcKcdLKVwPwUWKx2fGYwUZFI8WPFzxyDl4VzxyLhL0+5jFigeuqC2Dn+e4x7XILpdrOOqBNMFPu0tJj/mWJkQPjMWKR7x+Oz5PTBQPyBmo72K2EnwXHqC1wDpCT8XwJ95vhD4RB+jwsVoxaFZkH6OekN9F8a6jI0HXU265G8H8OHP9M+HyPrih9XZCtcIO0ZRtG6E6LgjIFCNhMoacEIYKophZ6AkxE6UspFeCLKfcUi/A/WRsZx7gNzYidqTPwE9RglLFFXTCkLXOeNBrDfTf5GAA/7MdliL3Z7BNbOQNUvQwFThIwcNU3ErqQa6m/BW2/0hzoOEBj0rWA23VI3EaQq+iRB2cHgCPUMJ23SO4DqASs6EHlxHh/WVRwJYakfneA8v5FOKNM4ILylDkjsYD29UwPA9aBqrNqcw9mwd1Wyo1WeDSxQ8YCirnT0HtvcUmfFjKF1cqfQAqmqohI2qohmrIjxqqoRryo4ZqqIb8qKEaqiE/aqiGasiPGqqhGvKjhmqohvyooRqqIT9qqIZqyI8aqqEa8rPE8A8ecGSjbp5tnAAAAABJRU5ErkJggg==" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_465,w_698/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png" />
              Moto
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png " />
            Trip
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688399652/assets/ba/dfb1d6-6c2b-4553-b929-9ff32f02a55e/original/UberXL.png" />
            Intercity
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_221,w_221/v1698434481/assets/cd/69dadc-022c-4496-964e-84369ec802ab/original/Uber-Reserve.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col  h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center;
`;

const Uberlogo = tw.img`
h-28
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4 w-20 text-sm
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200
`;

const ActionButtons = tw.div`
flex
`;

const ActionButton = tw.div`
 flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 text-xl
`;

const ActionButtonImage = tw.img`

h-3/5`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
