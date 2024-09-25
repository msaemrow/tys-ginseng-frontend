// src/components/Homepage.jsx
import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import images from "../assets/images";
import "../css/Homepage.css";
import ginsengPlant from "../assets/ginseng_plant.webp";

const Homepage = () => {
  return (
    <div className="container-fluid px-5">
      <Helmet>
        <title>Ty's Ginseng | Homepage</title>
        <meta
          name="description"
          content="Welcome to Ty's Ginseng. We offer premium Wild Simulated Ginseng and ginseng products. Learn about the benefits and visit us at the Minneapolis Farmers Market."
        />
        <meta
          name="keywords"
          content="Ginseng, Wild Simulated Ginseng, Ginseng Products, Ginseng Powder, Minneapolis Farmers Market"
        />
        <meta property="og:title" content="Ty's Ginseng - Homepage" />
        <meta
          property="og:description"
          content="Discover premium Wild Simulated Ginseng and its benefits. Visit us at the Minneapolis Farmers Market."
        />
        <meta property="og:image" content={ginsengPlant} />
      </Helmet>
      <main className="mt-4">
        {/* <h1 className="text-center">Ty's Ginseng</h1> */}
        <div
          id="about-us-div"
          className="d-flex justify-content-center align-items-center mt-4 mb-5"
        >
          <div className="d-flex flex-column justify-content-center align-items-center rounded p-3 w-50">
            <h2 className="text-left">About Us</h2>
            <p>
              We grow Wild Simulated Ginseng in Southern MN. We take great pride
              in our Ginseng and make sure that you get nothing but the best.
              Our Minnesota weather creates the perfect conditions for Ginseng
              to grow.
            </p>
            <p>
              Ty founded this business in 2015, building on the knowledge and
              skills he acquired from his grandfather, who has over 50 years of
              expertise in Ginseng cultivation. With a strong emphasis on
              producing high-quality roots, Ty is dedicated to upholding his
              grandfather's legacy of excellence in Ginseng farming.
            </p>
            <Link
              className="Homepage-our-process-btn btn mt-4 d-flex align-items-center justify-content-center"
              to="/our-process"
            >
              See our process
            </Link>
          </div>
          <img
            src={images[0].url}
            alt={images[0].description}
            className="img-fluid img-custom rounded"
          />
        </div>
        <div
          id="why-choose-us-div"
          className="d-flex justify-content-center mb-5 mt-4"
        >
          <img
            src={images[2].url}
            alt={images[2].description}
            className="img-fluid img-custom rounded"
          />
          <div className="d-flex flex-column justify-content-center align-items-center rounded p-3 w-50">
            <h2 className="text-left">Why Choose Ty's Ginseng</h2>
            <ul className="list-group">
              <li className="list-group-item">No additives to our products</li>
              <li className="list-group-item">Wild simulated</li>
              <li className="list-group-item">Older than cultivated</li>
              <li className="list-group-item">Bigger roots</li>
              <li className="list-group-item">Higher Quality</li>
              <li className="list-group-item">Longer necks</li>
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
                See our Ginseng
              </Link>
            </div>
          </div>
        </div>
        <div
          id="bottom-row"
          className="d-flex justify-content-evenly  mt-4 mb-5"
        >
          <div className="d-flex flex-column justify-content-center align-items-center rounded p-3 w-50">
            <h2 className="text-left">Benefits of Ginseng</h2>
            <ul className="list-group">
              <li className="list-group-item">Increase Energy</li>
              <li className="list-group-item">Reduce Inflammation</li>
              <li className="list-group-item">Improve Brain Function</li>
              <li className="list-group-item">Boost Immune System</li>
              <li className="list-group-item">Lower Blood Sugar</li>
              <li className="list-group-item">
                Potential benefits against cancer
              </li>
            </ul>
            <div className="d-flex justify-content-center w-100 px-5">
              <Link
                className="Homepage-our-process-btn btn mt-4 d-flex align-items-center justify-content-center"
                to="/recipes"
              >
                How to use Ginseng
              </Link>
              <Link
                className="Homepage-our-process-btn btn mt-4 ms-3 d-flex align-items-center justify-content-center"
                to="/testimonials"
              >
                Read Testimonials
              </Link>
            </div>
          </div>
          <img
            src={ginsengPlant}
            alt="Ginseng Plant"
            className="img-fluid img-custom rounded"
          />
        </div>
        .
        <div
          id="middle-row"
          className="d-flex justify-content-evenly mb-5 mt-4"
        >
          <img
            src={images[1].url}
            alt={images[1].description}
            className="img-fluid img-custom rounded"
          />
          <div className="d-flex flex-column justify-content-center align-items-center rounded p-3 w-50">
            <h2 className="text-left">Where to Find Us</h2>
            <h4>Minneapolis Farmers Market</h4>
            <p className="mb-0">
              We are at the Minneapolis farmers market on Saturdays or Sundays
              from May - October. Check our social media for the days we will be
              at the market.
            </p>
            <div className="mt-0 d-flex flex-column align-items-center justify-content-start">
              <p className="text-start mt-0 mb-0 fw-bold">Market Address:</p>
              <p className="text-start m-0">312 East Lyndale Ave N</p>
              <p className="text-start m-0">Minneapolis, MN 55405</p>
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
                <i className="fa-brands fa-instagram"></i> Instgram
              </a>
            </div>
            <Link className="Homepage-our-process-btn btn mt-1" to="/products">
              Buy Online Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
