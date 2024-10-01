import React from "react";
import { Helmet } from "react-helmet-async";
import "../css/OurProcess.css";

const OurProcess = () => {
  return (
    <div className="pt-4 pb-5 our-process-page">
      <Helmet>
        <title>Ty's Ginseng | Our Process</title>
        <meta
          name="description"
          content="Premium Woods Grown Ginseng Roots, Ginseng Powder and Ginseng Products."
        />
        <meta
          name="keywords"
          content="Ginseng, Wild Simulated Ginseng, Ginseng Products, Ginseng Powder, Premium Ginseng, Bulk Ginseng, Ginseng Roots, inflammation, energy, immune system, immunity, cold remedy, brain function, reduce inflammation, boost immunity"
        />
        <meta property="og:title" content="Ty's Ginseng - Our Process" />
        <meta
          property="og:description"
          content="Learn about how we grow our ginseng and get it ready for our customers."
        />
      </Helmet>
      <h2 className="pt-3 mb-2">Our Process</h2>
      <div
        id="carouselExample"
        className="carousel slide mt-0"
        data-bs-theme="dark"
        // data-bs-ride="carousel"
        data-bs-interval="9000"
        data-bs-pause="false"
        style={{ width: "90%", margin: "0 auto" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="our-process-image mb-0"
              src="https://tysginseng.s3.us-east-2.amazonaws.com/Beds_ready_to_be_planted.jpg"
              alt=""
            />
            <p className="mb-0 mt-1 fw-bold">Step 1: Prepare the Woods</p>
            <p className="mb-0">
              Since we grow wild simulated ginseng, we have to prepare the woods
              which includes clearing fallen trees and sticks from the areas
              where the ginseng seeds will be planted.
            </p>
          </div>
          <div className="carousel-item">
            <img
              className="our-process-image mb-0"
              src="https://tysginseng.s3.us-east-2.amazonaws.com/Beds_ready_to_be_planted.jpg"
              alt=""
            />
            <p className="mb-0 mt-1 fw-bold">Step 2: Make Ginseng Beds</p>
            <p className="mb-0 mt-1">
              To give the ginseng plants the best chance of succeeding, we hand
              dig ginseng beds that have trenches on either side to facilitate
              proper drainage.
            </p>
          </div>
          <div className="carousel-item">
            <img
              className="our-process-image mb-0"
              src="https://tysginseng.s3.us-east-2.amazonaws.com/Beds_ready_to_be_planted.jpg"
              alt=""
            />
            <p className="mb-0 mt-1 fw-bold">Step 3: Plant Seeds</p>
            <p className="mb-0 mt-1">
              Seeds are planted in the beds using a push behind one row planter
              to ensure even spacing, proper seed depth within the soil, and
              proper row spacing.
            </p>
          </div>
          <div className="carousel-item">
            <img
              className="our-process-image mb-0"
              src="https://tysginseng.s3.us-east-2.amazonaws.com/Beds_ready_to_be_planted.jpg"
              alt=""
            />
            <p className="mb-0 mt-1 fw-bold">Step 4: Monitor and Maintain</p>
            <p className="mb-0 mt-1">
              After the seeds are planted, we allow them to grow a minimum of 6
              years before harvesting. During these years, maintenance is done
              by cleaning up fallen trees and branches.
            </p>
          </div>
          <div className="carousel-item">
            <img
              className="our-process-image mb-0"
              src="https://tysginseng.s3.us-east-2.amazonaws.com/Beds_ready_to_be_planted.jpg"
              alt=""
            />
            <p className="mb-0 mt-1 fw-bold">Step 5: Harvest</p>
            <p className="mb-0 mt-1">
              Once the ginseng roots have reached 6+ years, the roots are hand
              dug one by one. This is to ensure roots are not damaged during the
              digging process. After digging the roots, they are washed, dried,
              and made into a powder for our customers to enjoy.
            </p>
          </div>
        </div>
        <button
          className="carousel-control-prev carousel-arrow"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon carousel-arrow"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default OurProcess;
