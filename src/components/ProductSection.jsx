// ProductCard.jsx
// Reusable product section component. Feed it a product object from productsConfig.js.

import React from "react";
import "../css/ProductSection.css";

export default function ProductSection({ product, reverse = false }) {
  const {
    id,
    name,
    tagline,
    description,
    benefits,
    price,
    unit,
    buttonText,
    purchaseUrl,
    badge,
    imageAlt,
    imageUrl,
    phoneLink,
  } = product;

  return (
    <section
      className={`product-card ${reverse ? "product-card--reverse" : ""}`}
      id={id}
      aria-label={name}
    >
      <div className="product-card__image-col">
        <img src={imageUrl} alt={imageAlt} className="product-card__image" />
      </div>

      <div className="product-card__content-col">
        <div className="d-flex align-items-center gap-2 mb-2">
          {badge &&
            badge.length > 0 &&
            badge.map((badgeItem, i) => (
              <span
                className="product-card__badge"
                aria-label={`Badge: ${badgeItem}`}
              >
                {badgeItem}
              </span>
            ))}
        </div>
        <h2 className="product-card__name">{name}</h2>
        <p className="product-card__tagline">{tagline}</p>
        <p className="product-card__description">{description}</p>

        <ul className="product-card__benefits" aria-label="Key benefits">
          {benefits.map((benefit, i) => (
            <li key={i} className="product-card__benefit-item">
              <span className="product-card__benefit-icon" aria-hidden="true">
                ✦
              </span>
              {benefit}
            </li>
          ))}
        </ul>

        <div className="product-card__footer">
          {phoneLink === "true" ? (
            <a href="tel:5073842390" className="product-card-button btn">
              Call to Order
            </a>
          ) : (
            <a
              href={purchaseUrl}
              className="product-card-button btn"
              aria-label={`${buttonText} — ${name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
