import { useState } from "react";
import { newsFeatures } from "./newsFeatures";
import FeatureModal from "./FeatureModal";
import "../css/InTheNews.css";

export default function InTheNews() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <section className="news-section" aria-labelledby="news-heading">
      <h2 id="news-heading">As Featured On</h2>
      <div className="news-grid">
        {newsFeatures.map((feature) => {
          const external = feature.type === "external";
          const comingSoon = feature.comingSoon;
          const Card = external && !comingSoon ? "a" : "button";
          return (
            <Card
              key={feature.id}
              className="news-card"
              {...(comingSoon
                ? { type: "button", disabled: true }
                : external
                  ? {
                      href: feature.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {
                      type: "button",
                      onClick: () => setActiveFeature(feature),
                      "aria-haspopup": "dialog",
                    })}
            >
              <img
                src={feature.thumbnail}
                alt={feature.thumbnailAlt}
                loading="lazy"
                width="600"
                height="338"
              />
              <span className="news-card-body">
                <span className="news-source">{feature.source}</span>
                <span className="news-title">{feature.title}</span>
                <span className="news-action">
                  {feature.action}{" "}
                  {!comingSoon && (
                    <span aria-hidden="true">{external ? "↗" : "▶"}</span>
                  )}
                </span>
                {external && !comingSoon && (
                  <span className="visually-hidden"> (opens in a new tab)</span>
                )}
              </span>
            </Card>
          );
        })}
      </div>
      {activeFeature && (
        <FeatureModal
          feature={activeFeature}
          onClose={() => setActiveFeature(null)}
        />
      )}
    </section>
  );
}
