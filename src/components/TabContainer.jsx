import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/TabContainer.css";

function InfoTabs({ images }) {
  const [activeTab, setActiveTab] = useState("why");

  return (
    <div className="tab-container rounded shadow p-3">
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "why" ? "active" : ""}`}
            onClick={() => setActiveTab("why")}
          >
            Why Choose Us
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "benefits" ? "active" : ""}`}
            onClick={() => setActiveTab("benefits")}
          >
            Benefits of Ginseng
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "find" ? "active" : ""}`}
            onClick={() => setActiveTab("find")}
          >
            Where to Find Us
          </button>
        </li>
      </ul>

      {/* Why Choose Ty's Ginseng div -- contains image then text  */}
      <div className="tab-content">
        {activeTab === "why" && (
          <div className="tab-layout h-100">
            <div
              style={{ flex: "0 0 40%" }}
              className="d-flex align-items-center justify-content-center"
            >
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
              className="d-flex flex-column justify-content-center align-items-center p-3"
              style={{ flex: "0 0 60%" }}
            >
              <h2>Why Choose Ty's Ginseng</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  100% pure ginseng in every jar
                </li>
                <li className="list-group-item">Woods grown</li>
                <li className="list-group-item">6+ year old roots</li>
                <li className="list-group-item">Premium quality</li>
                <li className="list-group-item">Family owned</li>
                <li className="list-group-item">Minnesota Grown member</li>
                <li className="list-group-item">
                  Combined 70 years of experience in growing ginseng
                </li>
              </ul>
              <div className="d-flex justify-content-center flex-column flex-md-row w-100 gap-2 mt-auto">
                <Link className="homepage-btn btn" to="/products">
                  Buy Online Now
                </Link>
                <Link className="homepage-btn btn" to="/pictures">
                  See Photos
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Benefits of Ginseng div -- contains text then image  */}
        {activeTab === "benefits" && (
          <div className="tab-layout h-100">
            <div
              style={{ flex: "0 0 40%" }}
              className="d-flex align-items-center justify-content-center"
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
            <div
              style={{ flex: "0 0 60%" }}
              className="d-flex flex-column justify-content-center align-items-center p-3"
            >
              <h2>Benefits of Ginseng</h2>
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
              <div className="d-flex flex-column flex-md-row justify-content-center w-100 gap-2 mt-auto">
                <Link className="homepage-btn btn" to="/recipes">
                  How to Use Ginseng
                </Link>
                <a
                  className="homepage-btn btn"
                  href="https://www.facebook.com/TysGinseng/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Reviews
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Where to find us div -- contains image then text */}
        {activeTab === "find" && (
          <div className="tab-layout h-100">
            <div
              style={{ flex: "0 0 40%" }}
              className="d-flex align-items-center justify-content-center"
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
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center p-3"
              style={{ flex: "0 0 60%" }}
            >
              <h2>Where to Find Us</h2>
              <p className="fs-5 fw-bold mb-0">Minneapolis Farmers Market</p>
              <div className="mt-auto">
                <p className="mb-0">
                  We are at the Minneapolis Farmers Market 6am-1pm on Saturdays
                  and Sundays from June - September. Check our Instagram and
                  Facebook for when we will be at the market.
                </p>
                <div className="mt-2 text-center">
                  <a
                    href="https://maps.app.goo.gl/6E8tSiL7Bh8bawXCA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="market-address d-block"
                  >
                    312 East Lyndale Ave N<br />
                    Minneapolis, MN 55405
                  </a>
                </div>
                <h4 className="mt-3 mb-1">Follow Us</h4>
                <div className="mb-2">
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
              </div>
              <Link className="homepage-btn btn mt-2" to="/products">
                Buy Online Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoTabs;
