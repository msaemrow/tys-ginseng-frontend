import React from "react";
import ginsengPlant from "../assets/ginseng_plant.webp";
import "../css/PictureList.css";

const PictureList = () => {
  return (
    <div className="pt-5">
      <h1 className="Products-title">Pictures</h1>
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
