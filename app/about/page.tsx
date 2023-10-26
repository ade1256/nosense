"use client";
import ImgAbout from "@/assets/images/about.png";
import Navbar from "@/components/Navbar";
import ImgPhoto1 from "@/assets/images/photo1.png"
import ImgPhoto2 from "@/assets/images/photo2.png"
import ImgPhoto3 from "@/assets/images/photo3.png"
import ImgPhoto4 from "@/assets/images/photo4.png"
import ImgPhoto5 from "@/assets/images/photo5.png"
import ImgPhoto6 from "@/assets/images/photo6.png"

import "./style.scss"

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="about-image">
          <img src={ImgAbout.src} alt="about-nosense" />
        </div>
        <div className="about-desc">
          <p>
            Is an exclusive collective based in <b>Purwokerto</b>, which focused
            on developing each other potentials from many backgrounds such as
            talent, organizer, designer, etc. Specifically, an electronic music
            scene which luckily they are having some{" "}
            <b>selected talents as a medium to create a better ecosystem</b>{" "}
            that includes some <b>curated genres</b> to keep their{" "}
            <b>brand value.</b>
          </p>
          <br />
          <p>
            Through some goals they already set for <b>global market</b>.
            Nosense Collective{" "}
            <b>provides spaces, hope that they could create a good habit</b> for
            people with the same references.
          </p>
        </div>

        <div className="archives">
            <h3>Archives</h3>
            <div className="gallery">
                <div className="photo" onClick={() => window.location.href = "https://www.instagram.com/nosense_______cltv/"}>
                    <img src={ImgPhoto1.src} alt="foto kegiatan 1" />
                </div>
                <div className="photo"  onClick={() => window.location.href = "https://www.instagram.com/nosense_______cltv/"}>
                    <img src={ImgPhoto2.src} alt="foto kegiatan 2" />
                </div>
                <div className="photo"  onClick={() => window.location.href = "https://www.instagram.com/nosense_______cltv/"}>
                    <img src={ImgPhoto3.src} alt="foto kegiatan 3" />
                </div>
                <div className="photo"  onClick={() => window.location.href = "https://www.instagram.com/nosense_______cltv/"}>
                    <img src={ImgPhoto4.src} alt="foto kegiatan 4" />
                </div>
                <div className="photo"  onClick={() => window.location.href = "https://www.instagram.com/nosense_______cltv/"}>
                    <img src={ImgPhoto5.src} alt="foto kegiatan 5" />
                </div>
                <div className="photo"  onClick={() => window.location.href = "https://www.instagram.com/nosense_______cltv/"}>
                    <img src={ImgPhoto6.src} alt="foto kegiatan 6" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
