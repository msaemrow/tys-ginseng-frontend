import React from "react";
import "../css/ImageModal.css"; // Add some modal styling here

const ImageModal = ({ imageUrl, imageAlt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img className="modal-image" src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
};

export default ImageModal;
