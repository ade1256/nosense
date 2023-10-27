"use client";

import ImgLogoNosense from "../assets/images/logo-nosense.svg";
import ImgText1 from "../assets/images/text1.svg";
import ImgArrowLeft from "../assets/images/arrow-left.svg";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import ImgLocusVector from "@/assets/images/locus_vector.png";
import ImgInstagram from "@/assets/images/instagram.png";
import ImgSoundcloud from "@/assets/images/soundcloud.png";
import ImgYoutube from "@/assets/images/youtube.png";

const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <div className="header">
        <div className="logo" onClick={() => router.push("/")}>
          <img src={ImgLogoNosense.src} alt="logo-nosense" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a onClick={() => router.push("/locus")}>Locus Stream</a>
              <a onClick={() => router.push("/event")}>Event</a>
              <a onClick={() => router.push("/merch")}>Merch</a>
              <a onClick={() => router.push("/about")}>About</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="home-content">
        <div className="background"></div>
        <button
          className="button"
          onClick={() =>
            (window.location.href = "https://www.instagram.com/locus_____std/")
          }
        >
          <span>
            <img src={ImgLocusVector.src} alt="locus-logo" />
          </span>
          LOCUS STUDIO
        </button>
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
        <div className="mt-32" onClick={() => router.push("/about")}>
          <a href="#" className="button">
            <img src={ImgArrowLeft.src} className="icon" />
          </a>
        </div>
      </div>

      <div className="sosmed-group">
        <div className="social-media"  onClick={() =>
            (window.location.href = "https://www.instagram.com/locus_____std/")
          }>
          <span>
            <img src={ImgInstagram.src} alt="locus-logo" />
          </span>
          INSTAGRAM
        </div>
        <div className="social-media"  onClick={() =>
            (window.location.href = "")
          }>
          <span>
            <img src={ImgSoundcloud.src} alt="locus-logo" />
          </span>
        </div>
        <div className="social-media"  onClick={() =>
            (window.location.href = "https://www.youtube.com/@locusstream")
          }>
          <span>
            <img src={ImgYoutube.src} alt="locus-logo" />
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
