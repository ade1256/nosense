"use client";

import Navbar from "@/components/Navbar";
import ImgEventBanner1 from "@/assets/images/event_12_01_2024.png";
import Image from "next/image";
import ImgArrowLeft from "@/assets/images/arrow-left.svg";
import "./style.scss";

const EventPage = () => {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <div>
      <Navbar />
      <div className="event-wrapper flex gap-[24px]">
        <div className="items">
          <Image src={ImgEventBanner1} alt="event-banner-1" />
        </div>
        <div className="items">
          <div className="event-list">
            <div
              className="event-item active"
              onClick={() =>
                (window.location.href = `https://wa.me/6281229808180`)
              }
            >
              <div className="title">
                <h4>Crystal Cadence</h4>
              </div>
              <div className="desc">
                Collaboration with Locus Studio | 14 January 2024
              </div>
              <div className="action">
                <a
                  href="#"
                  className="button"
                  onClick={() =>
                    (window.location.href = `https://wa.me/6281229808180`)
                  }
                >
                  <img src={ImgArrowLeft.src} className="icon" />
                </a>
              </div>
            </div>
            <div className="event-item">
              <div className="title">
                <h4>Listen to The Deafening Silnce</h4>
              </div>
              <div className="desc">
                Website Launching Party | 28 October 2023
              </div>
              <div className="action">
                <a href="#" className="button">
                  <img src={ImgArrowLeft.src} className="icon" />
                </a>
              </div>
            </div>
            <div className="event-item">
              <div className="title">
                <h4>Shoot The Brezee</h4>
              </div>
              <div className="desc">
                Collaboration with Alas House | 18 March 2023
              </div>
              <div className="action">
                <a href="#" className="button">
                  <img src={ImgArrowLeft.src} className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
