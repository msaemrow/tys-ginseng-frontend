// src/components/Homepage.jsx
import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import images from "../assets/images";
import "../css/Homepage.css";
import ginsengPlant from "../assets/ginseng_plant.webp";
import logo from "../assets/TysGinsengLogo.png";
import mnGrownLogo from "../assets/mn-grown-logo.png";

const Homepage = () => {
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
      <main className="mt-1">
        {/* About us div-- contains text then image  */}
        <div
          id="about-us-div"
          className="d-flex justify-content-center align-items-center mt-4 mb-5"
        >
          <div
            className="d-flex flex-column justify-content-center align-items-center rounded p-3"
            style={{ flex: "0 0 60%" }}
          >
            <h2 className="text-left">About Us</h2>
            <p>
              At Ty's Ginseng, we're proud to be a small, family-owned business,
              where every customer has the opportunity to interact directly with
              the owner. My family and I grow ginseng in southern Minnesota and
              our Minnesota weather creates the perfect conditions for ginseng
              to grow in our woods. We take great pride in our roots to make
              sure that you get only the best quality woods grown ginseng.
            </p>
            <p>
              At the age of 10, I started to help my grandpa in his ginseng
              patch. Who knew that 8 years later, I would be starting my own
              ginseng business taking it to a new level. I founded my ginseng
              business in 2012, building on the knowledge and skills I acquired
              from my grandpa, who has over 50 years of expertise in woods grown
              ginseng. With a strong emphasis on producing high-quality roots, I
              am dedicated to upholding my grandfather's legacy of excellence in
              ginseng farming.
            </p>
            <div className="d-flex justify-content-space-between align-items-center">
              <Link
                className="Homepage-our-process-btn btn mt-2 me-4 d-flex align-items-center justify-content-center w-50"
                to="/our-process"
              >
                See our process
              </Link>
              <img
                src={mnGrownLogo}
                alt="Minnesota Grown logo"
                className="mnGrownLogo rounded"
              />
            </div>
          </div>
          <div style={{ flex: "0 0 40%" }}>
            {images
              .filter((image) => image.location === "about")
              .map((image) => (
                <img
                  key={image.url}
                  src={image.url}
                  alt={image.description}
                  className="img-fluid img-custom rounded"
                />
              ))}
          </div>
        </div>
        {/* Why Choose Ty's Ginseng div -- contains image then text  */}
        <div
          id="why-choose-us-div"
          className="d-flex justify-content-center mb-5 mt-4"
        >
          <div style={{ flex: "0 0 40%" }}>
            {images
              .filter((image) => image.location === "why")
              .map((image) => (
                <img
                  key={image.url}
                  src={image.url}
                  alt={image.description}
                  className="img-fluid img-custom rounded"
                />
              ))}
          </div>

          <div
            className="d-flex flex-column justify-content-center align-items-center rounded p-3"
            style={{ flex: "0 0 60%" }}
          >
            <h2 className="text-left">Why Choose Ty's Ginseng</h2>
            <ul className="list-group">
              <li className="list-group-item pt-1 pb-0">
                100% pure ginseng in every jar
              </li>
              <li className="list-group-item pt-1 pb-0">Woods grown</li>
              <li className="list-group-item pt-1 pb-0">6+ year old roots</li>
              <li className="list-group-item pt-1 pb-0">Premium quality</li>
              <li className="list-group-item pt-1 pb-0">Family owned</li>
              <li className="list-group-item pt-1 pb-0">
                Minnesota Grown member
              </li>
              <li className="list-group-item pt-1 pb-0">
                Combined 70 years of experience in growing ginseng
              </li>
            </ul>
            <div className="d-flex justify-content-center w-100 px-5">
              <Link
                className="Homepage-our-process-btn btn mt-4 d-flex align-items-center justify-content-center"
                to="/products"
              >
                Buy Online Now
              </Link>
              <Link
                className="Homepage-our-process-btn btn mt-4 ms-3 d-flex align-items-center justify-content-center"
                to="/pictures"
              >
                See Photos
              </Link>
            </div>
          </div>
        </div>
        {/* Benefits of Ginseng div -- contains text then image  */}
        <div
          id="benefits-div"
          className="d-flex justify-content-evenly  mt-4 mb-5"
        >
          <div
            style={{ flex: "0 0 60%" }}
            className="d-flex flex-column justify-content-center align-items-center rounded p-3"
          >
            <h2 className="text-left">Benefits of Ginseng</h2>
            <ul className="list-group">
              <li className="list-group-item">Increases Energy</li>
              <li className="list-group-item">Reduces Inflammation</li>
              <li className="list-group-item">Improves Brain Function</li>
              <li className="list-group-item">Boosts Immune System</li>
              <li className="list-group-item">Lowers Blood Sugar</li>
              <li className="list-group-item">
                Potential benefits against cancer
              </li>
            </ul>
            <div className="d-flex justify-content-center w-100 px-5">
              <Link
                className="Homepage-our-process-btn btn mt-4 d-flex align-items-center justify-content-center"
                to="/recipes"
              >
                How to Use Ginseng
              </Link>
              {/* <Link
                className="Homepage-our-process-btn btn mt-4 ms-3 d-flex align-items-center justify-content-center"
                to="/testimonials"
              >
                Read Testimonials
              </Link> */}
              <a
                href="https://www.facebook.com/TysGinseng/reviews"
                className="Homepage-our-process-btn btn mt-4 ms-3 d-flex align-items-center justify-content-center"
                target="_blank"
              >
                Read Reviews
              </a>
            </div>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ flex: "0 0 40%" }}
          >
            {images
              .filter((image) => image.location === "benefits")
              .map((image) => (
                <img
                  key={image.url}
                  src={image.url}
                  alt={image.description}
                  className="img-fluid img-custom rounded"
                />
              ))}
          </div>
        </div>
        {/* Where to find us div -- contains image then text */}
        <div
          id="find-us-div"
          className="d-flex justify-content-evenly mb-5 mt-4"
        >
          {images
            .filter((image) => image.location === "market")
            .map((image) => (
              <img
                key={image.url}
                src={image.url}
                alt={image.description}
                className="img-fluid img-custom rounded"
              />
            ))}
          <div className="d-flex flex-column justify-content-center align-items-center rounded p-3">
            <h2 className="text-left">Where to Find Us</h2>
            <p className="m-0 fs-5 fw-bold">Minneapolis Farmers Market</p>
            <p className="mb-0">
              We are at the Minneapolis Farmers Market 6am-1pm on Saturdays and
              Sundays from June - September. Check our Instagram and Facebook
              for when we will be at the market.
            </p>
            <div className="mt-2 d-flex flex-column align-items-center justify-content-start">
              <p className="text-start mt-0 mb-0 fw-bold">Market Address:</p>
              <a
                href="https://maps.app.goo.gl/6E8tSiL7Bh8bawXCA"
                target="_blank"
                className="text-start m-0 market-address"
              >
                312 East Lyndale Ave N
              </a>
              <a
                href="https://maps.app.goo.gl/6E8tSiL7Bh8bawXCA"
                target="_blank"
                className="text-start m-0 market-address"
              >
                Minneapolis, MN 55405
              </a>
            </div>
            <h4 className="mt-3 mb-0">Follow Us</h4>
            <div className="mt-1 mb-0">
              <a
                href="https://www.facebook.com/TysGinseng/"
                target="_blank"
                rel="noopener noreferrer"
                className="follow-us"
              >
                <i className="fa-brands fa-facebook"></i> Facebook
              </a>
              <a
                href="https://www.instagram.com/tysginseng/"
                target="_blank"
                rel="noopener noreferrer"
                className="follow-us ms-4"
              >
                <i className="fa-brands fa-instagram"></i> Instagram
              </a>
            </div>
            <Link
              className="Homepage-our-process-btn btn mt-1 w-50"
              to="/products"
            >
              Buy Online Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
