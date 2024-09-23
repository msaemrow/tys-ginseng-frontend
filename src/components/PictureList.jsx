import React from "react";
import { Helmet } from "react-helmet-async";
import ginsengPlant from "../assets/ginseng_plant.webp";
import "../css/PictureList.css";

const PictureList = () => {
  return (
    <div className="pt-5 picture-list">
      <Helmet>
        <title>Ty's Ginseng | Our Ginseng</title>
        <meta
          name="description"
          content="Images of premium wild simulated Ginseng Roots, Ginseng Roots, and Ginseng Plants."
        />
        <meta
          name="keywords"
          content="Ginseng, Wild Simulated Ginseng, Ginseng Products, Ginseng Plant, Ginseng Bed, Ginseng, Premium Ginseng, Bulk Ginseng, Ginseng Roots"
        />
        <meta property="og:title" content="Ty's Ginseng - Pictures" />
        <meta
          property="og:description"
          content="Discover premium Wild Simulated Ginseng and its benefits. Visit us at the Minneapolis Farmers Market."
        />
      </Helmet>
      <h1 className="pictures-title">Our Ginseng</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <img
          src={ginsengPlant}
          alt="Ginseng Plant"
          className="img-fluid img-custom rounded m-4"
        />
        <img
          src={ginsengPlant}
          alt="Ginseng Plant"
          className="img-fluid img-custom rounded m-4"
        />
        <img
          src={ginsengPlant}
          alt="Ginseng Plant"
          className="img-fluid img-custom rounded m-4"
        />
        <img
          src={ginsengPlant}
          alt="Ginseng Plant"
          className="img-fluid img-custom rounded m-4"
        />
      </div>
    </div>
  );
};

export default PictureList;
