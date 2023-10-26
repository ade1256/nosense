"use client"

import ImgLogoNosense from "../assets/images/logo-nosense.svg";
import ImgText1 from "../assets/images/text1.svg";
import ImgArrowLeft from "../assets/images/arrow-left.svg";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="">
      <div className="header">
        <div className="logo">
          <img src={ImgLogoNosense.src} alt="logo-nosense" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="locus.html">Locus Stream</a>
              <a href="event.html">Event</a>
              <a href="merch.html">Merch</a>
              <a href="about.html">About</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="home-content">
        <div className="background"></div>
      </div>

      <div className="about">
        <p>
          <b>Nosense</b> Is an exclusive collective based in <b>Purwokerto</b>,
          which focused on developing each other potentials from many
          backgrounds such as talent, organizer, designer, etc. Specifically, an
          electronic music scene which luckily they are having some selected
          talents as a medium to create a better ecosystem that includes some
          curated genres to keep their brand value.
        </p>
        <div className="mt-10">
          <img src={ImgText1.src} alt="text illustrator" />
        </div>
        <div className="mt-32">
          <a href="#" className="button">
            <img src={ImgArrowLeft.src} className="icon" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
