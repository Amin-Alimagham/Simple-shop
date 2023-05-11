import React, { Component, useState } from "react";
import "../style/home.css";
import image1 from "../image/Untitled-2.png";
import Carouselimg1 from "../image/1.jpg";
import Carouselimg2 from "../image/2.jpg";
import Carouselimg3 from "../image/3.jpg";
import Carouselimg4 from "../image/4.jpg";
import ImageGallery from "react-image-gallery";

const Home = () => {
  const images = [
    {
      original: Carouselimg1,
    },
    {
      original: Carouselimg2,
    },
    {
      original: Carouselimg3,
    },
    {
      original: Carouselimg4,
    },
  ];

  return (
    <section>
      <img src={image1} alt="#" className="imgStyle" />
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        isRTL={true}
        showBullets={true}
        showIndex={true}
      />
    </section>
  );
};
export default Home;
