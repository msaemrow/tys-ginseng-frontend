import React, { useState } from "react";
import GinsengApi from "../../apiGinsengAPI/api";
import "../../css/Admin/ChangePhoto.css";
import { toast } from "react-toastify";

const ChangePhoto = ({ onClose, onSubmit }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let newUrl = null;
      if (file) {
        newUrl = await GinsengApi.uploadImage(file);
      }
      if (newUrl) {
        onSubmit(newUrl);
        onClose();
      } else {
        toast.error("Please provide a photo URL");
      }
    } catch (err) {
      toast.error("Failed to upload image");
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>Change Product Photo</h2>
        <div className="d-flex align-items-center">
          <label className="form-label me-2" style={{ width: "30%" }}>
            Image File:
          </label>
          <input
            type="file"
            name="image"
            className="form-control"
            accept="image/*" // Optional: Restrict file types to images only
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePhoto;
