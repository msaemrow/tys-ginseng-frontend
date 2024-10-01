import React from "react";
import images from "../assets/images";
import { Helmet } from "react-helmet-async";
import ginsengPlant from "../assets/ginseng_plant.webp";
import "../css/PictureList.css";

const PictureList = () => {
  return (
    <div className="picture-list">
      <Helmet>
        <title>Ty's Ginseng | Our Ginseng</title>
        <meta
          name="description"
          content="Images of premium woods grown Ginseng Roots, Ginseng Roots, and Ginseng Plants."
        />
        <meta
          name="keywords"
          content="Ginseng, Woods Grown Ginseng, Ginseng Products, Ginseng Plant, Ginseng Bed, Ginseng, Premium Ginseng, Bulk Ginseng, Ginseng Roots"
        />
        <meta property="og:title" content="Ty's Ginseng - Our Ginseng" />
        <meta
          property="og:description"
          content="Discover premium woods grown Ginseng and its benefits. Visit us at the Minneapolis Farmers Market."
        />
      </Helmet>
      <h1 className="pictures-title mb-0">Our Ginseng</h1>
      <div
        id="our-ginseng-carousel"
        className="carousel slide mt-0"
        data-bs-theme="dark"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="false"
        style={{ width: "75%", margin: "0 auto" }}
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image.url}
                alt={image.description}
                className="h-100 img-fluid img-custom rounded m-4"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev carousel-arrow"
          type="button"
          data-bs-target="#our-ginseng-carousel"
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
          data-bs-target="#our-ginseng-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon carousel-arrow"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="picture-list">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.description}
            className="img-fluid img-custom rounded m-4"
          />
        ))}
      </div>
    </div>
  );
};

export default PictureList;
