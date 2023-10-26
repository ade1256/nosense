"use client";
import Navbar from "@/components/Navbar";
import ImgLocusMixtape from "@/assets/images/locus_mixtape.png";
import "./style.scss";

import ImgPeople1 from "@/assets/images/people1.png";
import ImgPeople2 from "@/assets/images/people2.png";
import ImgPeople3 from "@/assets/images/people3.png";
import ImgPeople4 from "@/assets/images/people4.png";
import ImgPeople5 from "@/assets/images/people5.png";
import ImgPeople6 from "@/assets/images/people6.png";
import ImgLocusLogo from "@/assets/images/locus_vector.png";

const LocusPage = () => {
  const peoples = [
    {
      name: "OSCURO ENIGMA",
      nickname: "CIKO",
      image: ImgPeople2.src,
      youtubeUrl: "https://www.youtube.com/watch?v=LxzOjq6pQtI&t=400s",
    },
    {
      name: "URBAN ECHOES",
      nickname: "DVTR",
      image: ImgPeople3.src,
      youtubeUrl: "https://www.youtube.com/watch?v=jsaoOc9eZsE&t=1237s",
    },
    {
      name: "URBAN ECHOES",
      nickname: "DIFFY",
      image: ImgPeople4.src,
      youtubeUrl: "https://www.youtube.com/watch?v=EeJa9kUXjdY&t=1557s",
    },
    {
      name: "VOID REVERIE",
      nickname: "CHEFE",
      image: ImgPeople1.src,
      youtubeUrl: "",
    },
    {
      name: "URBAN ECHOES",
      nickname: "IPAM",
      image: ImgPeople5.src,
      youtubeUrl: "https://www.youtube.com/watch?v=EeJa9kUXjdY&t=1557s",
    },
    {
      name: "URBAN ECHOES",
      nickname: "YASTE",
      image: ImgPeople6.src,
      youtubeUrl: "https://www.youtube.com/watch?v=EeJa9kUXjdY&t=1557s",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="locus-content">
        <div className="image locus-desc-image">
          <img src={ImgLocusMixtape.src} alt="locus-mixtape" />
        </div>
        <p className="locus-desc">
          Locumi is a bunch of mixtapes archived from Nosense Collective events,
          mini gigs, or simply a product that we made while we’re just on the
          mood to make something.
        </p>

        <div className="locus-mixtape">
          {peoples.map((people: any, key: number) => (
            <div
              className="people"
              key={key}
              onClick={() => (window.location.href = people.youtubeUrl)}
            >
              <img src={people.image} alt={people.name} />
              <div className="locus-logo">
                <img src={ImgLocusLogo.src} alt="locus-logo" />
              </div>
              <div className="info">
                <span className="name">{people.name}</span>
                <span className="nickname">{people.nickname}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default LocusPage;
