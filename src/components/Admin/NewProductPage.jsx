import React, { useState } from "react";
import axios from "axios";
import GinsengApi from "../../apiGinsengAPI/api";

const NewProductPage = () => {
  const emptyForm = {
    barcode: 0,
    type: "",
    name: "",
    price: 0,
    sale_price: 0,
    on_sale: false,
    description: "",
    servings: "",
    image_url: "",
    weight: 0,
    quantity: 0,
    best_seller: false,
  };
  const [formData, setFormData] = useState(emptyForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //convert formData to numbers for API call
    const productData = {
      ...formData,
      barcode: Number(formData.barcode),
      price: Number(formData.price),
      sale_price: Number(formData.sale_price),
      weight: Number(formData.weight),
      quantity: Number(formData.quantity),
    };
    try {
      const response = await GinsengApi.addProduct(productData);
      console.log("Product created:", response);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="pt-5">
      <h1>Create New Product</h1>
      <form
        onSubmit={handleSubmit}
        className="container mt-1"
        style={{ maxWidth: "800px" }}
      >
        <div className="row">
          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Barcode:
            </label>
            <input
              type="number"
              name="barcode"
              className="form-control"
              value={formData.barcode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Type:
            </label>
            <input
              type="text"
              name="type"
              className="form-control"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Price:
            </label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Sale Price:
            </label>
            <input
              type="number"
              name="sale_price"
              className="form-control"
              value={formData.sale_price}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              On Sale:
            </label>
            <div className="ms-2">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="on_sale"
                  id="on_sale_yes"
                  value={true}
                  className="form-check-input"
                  checked={formData.on_sale === true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      on_sale: e.target.value === "true",
                    })
                  }
                />
                <label className="form-check-label" htmlFor="on_sale_yes">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="on_sale"
                  id="on_sale_no"
                  value={false}
                  className="form-check-input"
                  checked={formData.on_sale === false}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      on_sale: e.target.value === "false",
                    })
                  }
                />
                <label className="form-check-label" htmlFor="on_sale_no">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Description:
            </label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Servings:
            </label>
            <input
              type="text"
              name="servings"
              className="form-control"
              value={formData.servings}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Image URL:
            </label>
            <input
              type="text"
              name="image_url"
              className="form-control"
              value={formData.image_url}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Weight:
            </label>
            <input
              type="number"
              name="weight"
              className="form-control"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Quantity:
            </label>
            <input
              type="number"
              name="quantity"
              className="form-control"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Best Seller:
            </label>
            <div className="ms-2">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="best_seller"
                  id="best_seller_yes"
                  value={true}
                  className="form-check-input"
                  checked={formData.best_seller === true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      best_seller: e.target.value === "true",
                    })
                  }
                />
                <label className="form-check-label" htmlFor="best_seller_yes">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="best_seller"
                  id="best_seller_no"
                  value={false}
                  className="form-check-input"
                  checked={formData.best_seller === false}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      best_seller: e.target.value === "false",
                    })
                  }
                />
                <label className="form-check-label" htmlFor="best_seller_no">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProductPage;
