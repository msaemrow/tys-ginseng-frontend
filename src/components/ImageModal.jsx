import React from "react";
import "../css/ImageModal.css"; // Add some modal styling here

const ImageModal = ({ imageUrl, imageAlt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img className="modal-image" src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
};

export default ImageModal;
