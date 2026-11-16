import { useEffect, useRef, useState } from "react";
import { newsFeatures } from "./newsFeatures";
import FeatureModal from "./FeatureModal";
import "../css/InTheNews.css";

export default function InTheNews() {
  const [activeFeature, setActiveFeature] = useState(null);
  const carouselRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ previous: false, next: false });

  useEffect(() => {
    const carousel = carouselRef.current;
    const updateControls = () => {
      setCanScroll({
        previous: carousel.scrollLeft > 2,
        next: carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 2,
      });
    };
    const observer = new ResizeObserver(updateControls);
    observer.observe(carousel);
    carousel.addEventListener("scroll", updateControls, { passive: true });
    updateControls();
    return () => {
      observer.disconnect();
      carousel.removeEventListener("scroll", updateControls);
    };
  }, []);

  const scrollCards = (direction) => {
    const carousel = carouselRef.current;
    const cards = carousel.children;
    if (cards.length < 2) return;
    carousel.scrollBy({
      left: direction * (cards[1].offsetLeft - cards[0].offsetLeft),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <section className="news-section" aria-labelledby="news-heading">
      <div className="news-header">
        <h2 id="news-heading">As Featured On</h2>
        <div className="news-controls" aria-label="News carousel controls">
          <button type="button" aria-label="Previous news feature" aria-controls="news-carousel" disabled={!canScroll.previous} onClick={() => scrollCards(-1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="m14.5 6-6 6 6 6" />
            </svg>
          </button>
          <button type="button" aria-label="Next news feature" aria-controls="news-carousel" disabled={!canScroll.next} onClick={() => scrollCards(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="m9.5 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="news-grid" id="news-carousel" ref={carouselRef} role="region" aria-label="News features" tabIndex={0}>
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
