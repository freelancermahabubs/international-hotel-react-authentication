import React from "react";
import banner from "../../../src/assets/intercontinental-hotel.jpg";
import Navbar from "../Navbar/Navbar";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(140deg, #181818 0%, rgba(24, 24, 24, 0.822917) 24.48%, rgba(24, 24, 24, 0) 100%), url(${banner})`,
        backgroundRepeat: "no-repeat",
        height: "80vh",
        width: "700",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="">
        <p className="text-gray-200 font-bold text-6xl text-center mt-28 pt-8 ">
          InterNational Hotel
        </p>
        <Marquee speed={100}>
          <p className="text-center font-semibold text-2xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient ">
            A Global Icon of Arabian Luxury
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
