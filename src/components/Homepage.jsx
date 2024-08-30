// src/components/Homepage.jsx
import React, { useRef, useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";
import "../css/Homepage.css";
import ginsengPlant from "../assets/ginseng_plant.webp";

const Homepage = () => {
  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    if (buttonRef.current && tooltipRef.current) {
      createPopper(buttonRef.current, tooltipRef.current, {
        placement: "bottom",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
        ],
      });
    }
  }, []);

  return (
    <div className="container-fluid bg-custom-gold">
      <main className="mt-4">
        <h1 className="text-center">Ty's Ginseng</h1>
        <div id="top-row" className="d-flex justify-content-evenly  mt-4 mb-5">
          <div className="bg-light d-flex flex-column justify-content-center rounded p-3 w-50">
            <h2 className="text-left">About Us</h2>
            <p>
              We grow Wild Simulated Ginseng in Southern MN. We take great pride
              in our Ginseng and make sure that you get nothing but the best.
              Our Minnesota weather creates the perfect conditions for Ginseng
              to grow. We offer a variety of ginseng products such as Ginseng
              powder, dried roots and fresh roots. The dried roots and fresh
              roots will be available in the fall. If you have an interest in
              growing your own ginseng, contact us for pricing
            </p>
          </div>
          <img
            src={ginsengPlant}
            alt="Ginseng Plant"
            className="img-fluid img-custom rounded"
          />
        </div>
        <div
          id="middle-row"
          className="d-flex justify-content-evenly mb-5 mt-4"
        >
          <img
            src={ginsengPlant}
            alt="Ginseng Plant"
            className="img-fluid img-custom rounded"
          />
          <div className="bg-light d-flex flex-column justify-content-center rounded p-3 w-50">
            <h2 className="text-left">Benefits of Ginseng</h2>
            <ul className="list-group bg-light">
              <li className="list-group-item">Increase Energy</li>
              <li className="list-group-item">Reduce Inflammation</li>
              <li className="list-group-item">Improve Brain Function</li>
              <li className="list-group-item">Boost Immune System</li>
              <li className="list-group-item">Lower Blood Sugar</li>
              <li className="list-group-item">
                Potential benefits against cancer
              </li>
            </ul>
          </div>
        </div>
        <div
          id="bottom-row"
          className="d-flex justify-content-evenly  mt-4 mb-5"
        >
          <div className="bg-light d-flex flex-column justify-content-center rounded p-3 w-50">
            <h2 className="text-left">Minneapolis Farmers Market</h2>
            <p>
              We are at the Minneapolis farmers market on Saturdays or Sundays
              from May - October. Check our social media for the days we will be
              at the market.
            </p>
            <p className="text-start mb-0">Market Address:</p>
            <p className="text-start m-0">312 East Lyndale Ave N</p>
            <p className="text-start m-0">Minneapolis, MN 55405</p>
          </div>
          <img
            src={ginsengPlant}
            alt="Ginseng Plant"
            className="img-fluid img-custom rounded"
          />
        </div>
        <button
          ref={buttonRef}
          className="btn btn-primary mt-4"
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
        >
          Products
        </button>
        <div
          ref={tooltipRef}
          className={`tooltip ${tooltipVisible ? "show" : ""}`}
        >
          Check out our Ginseng Products
        </div>
      </main>
    </div>
  );
};

export default Homepage;
