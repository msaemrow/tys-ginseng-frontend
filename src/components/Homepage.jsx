// src/components/Homepage.jsx
import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import images from "../assets/images";
import "../css/Homepage.css";
import ginsengPlant from "../assets/ginseng_plant.webp";
import logo from "../assets/TysGinsengLogo.png";
import TabContainer from "./TabContainer";
import mnGrownLogo from "../assets/mn-grown-logo.png";
import homepageMainImage from "../assets/homepage-main-image.jpg";
import subImage1 from "../assets/homepage-subimage-1.jpg";
import subImage2 from "../assets/homepage-subimage-2.jpg";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Why");
  return (
    <div id="homepage-top-div" className="container-fluid px-5">
      {/* Helmet component which sets meta data */}
      <Helmet>
        <title>Ty's Ginseng | Homepage</title>
        <meta
          name="description"
          content="Welcome to Ty's Ginseng. We offer premium woods grown Ginseng and ginseng products. Learn about the benefits and shop online or visit us at the Minneapolis Farmers Market."
        />
        <meta
          name="keywords"
          content="Ginseng, Woods Grown Ginseng, Ginseng Products, Ginseng Powder, Ginseg Roots, Minneapolis Farmers Market"
        />
        <meta property="og:title" content="Ty's Ginseng - Homepage" />
        <meta
          property="og:description"
          content="Discover premium woods grown ginseng and its benefits. Visit us at the Minneapolis Farmers Market."
        />
        <meta property="og:image" content={logo} />
      </Helmet>
      {/* main element of homepages */}
      <main className="mt-1 px-md-5">
        <div className="w-100 mt-4 mb-0 ginseng-experience text-center">
          <a
            className="fs-5 text-white text-decoration-none fw-semibold d-inline-block"
            href="https://book.squareup.com/appointments/vr4nm9pupnu29k/location/LCN2GNEA2T9HY/services"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌿 New! Book Your "Wild Ginseng Experience" tour →
          </a>
        </div>
        <div className="navbar-spacer" />
        <section className="hero-section">
          <div className="hero-text-wrapper">
            <div className="hero-top">
              <h1 className="mb-0">PREMIUM</h1>
            </div>
            <div className="hero-bottom">
              <h2 className="mb-4">GINSENG</h2>
              <p className="lead">
                At Ty's Ginseng, we're proud to be a small, family-owned
                business, where every customer has the opportunity to interact
                directly with the owner. My family and I grow ginseng in
                southern Minnesota and our Minnesota weather creates the perfect
                conditions for ginseng to grow in our woods. We take great pride
                in our roots to make sure that you get only the best quality
                woods grown ginseng.
              </p>
              <p className="lead">
                I founded my ginseng business in 2012, building on the knowledge
                and skills I acquired from my grandpa, who has over 50 years of
                expertise in woods grown ginseng. With a strong emphasis on
                producing high-quality roots, I am dedicated to upholding my
                grandfather's legacy of excellence in ginseng farming.
              </p>
              <Link
                to="/products"
                className="btn shop-now-btn btn-lg px-4 py-2"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
          <div className="hero-images">
            <div className="main-hero-image">
              <img src={homepageMainImage} alt="Main hero" />
            </div>
            <div className="sub-hero-images">
              <img src={subImage1} alt="Ginseng field" />
              <img src={subImage2} alt="Ginseng roots" />
            </div>
          </div>
        </section>
        <TabContainer images={images} />
      </main>
    </div>
  );
};

export default Homepage;
