import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import GinsengApi from "../../apiGinsengAPI/api";

const UpdateProductPage = () => {
  const { barcode } = useParams();
  const navigate = useNavigate();

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
    listed_on_site: true,
  };

  const [formData, setFormData] = useState(emptyForm);

  // Fetch product data to populate form fields
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await GinsengApi.getProduct(barcode);
        const productData = response.product;
        setFormData({
          ...formData,
          ...productData,
        });
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchProduct();
  }, [barcode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convert formData values to numbers for appropriate fields
    const updatedProductData = {
      ...formData,
      barcode: Number(formData.barcode),
      price: Number(formData.price),
      sale_price: Number(formData.sale_price),
      weight: Number(formData.weight),
      quantity: Number(formData.quantity),
    };

    try {
      const response = await GinsengApi.updateProduct(
        barcode,
        updatedProductData
      );
      navigate(`/admin/product/${barcode}`);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="pt-5">
      <h1>Update Product</h1>
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
            <select
              name="type"
              className="form-control"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="SINGLE">SINGLE</option>
              <option value="BULK">BULK</option>
              <option value="ROOTLET">ROOTLET</option>
              <option value="PRODUCT">PRODUCT</option>
              <option value="OTHER">OTHER</option>
            </select>
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
              Description:
            </label>
            <textarea
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              rows={5}
            />
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Servings:
            </label>
            <textarea
              name="servings"
              className="form-control"
              value={formData.servings}
              onChange={handleChange}
              rows={5}
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
                      on_sale: JSON.parse(e.target.value),
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
                      on_sale: JSON.parse(e.target.value),
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
                      best_seller: JSON.parse(e.target.value),
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
                      best_seller: JSON.parse(e.target.value),
                    })
                  }
                />
                <label className="form-check-label" htmlFor="best_seller_no">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3 d-flex align-items-center">
            <label className="form-label me-2" style={{ width: "30%" }}>
              Listed on Site?
            </label>
            <div className="ms-2">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="listed_on_site"
                  id="listed_on_site_yes"
                  value="true"
                  className="form-check-input"
                  checked={formData.listed_on_site === true}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      listed_on_site: JSON.parse(e.target.value),
                    })
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="listed_on_site_yes"
                >
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="listed_on_site"
                  id="listed_on_site_no"
                  value="false"
                  className="form-check-input"
                  checked={formData.listed_on_site === false}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      listed_on_site: JSON.parse(e.target.value),
                    })
                  }
                />
                <label className="form-check-label" htmlFor="listed_on_site_no">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Update Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductPage;
