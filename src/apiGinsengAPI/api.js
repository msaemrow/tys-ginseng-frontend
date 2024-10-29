import axios from "axios";

const BASE_URL = "http://localhost:3001";
class GinsengApi {
  static async addProduct(product) {
    try {
      let res = await axios.post(`${BASE_URL}/api/products`, product);
      return res.data;
    } catch (err) {
      console.error("Error creating product.", err.response.data.error);
    }
  }

  static async getAllProducts() {
    try {
      let res = await axios.get(`${BASE_URL}/api/products/all`);
      return res.data;
    } catch (err) {
      console.error("ERROR. ", err.response.data);
    }
  }

  static async getProduct(barcode) {
    try {
      let res = await axios.get(`${BASE_URL}/api/products/${barcode}`);
      return res.data;
    } catch (err) {
      console.error("ERROR. ", err.response.data);
    }
  }

  static async updateProduct(barcode, product) {
    try {
      let res = await axios.patch(
        `${BASE_URL}/api/products/${barcode}`,
        product
      );
      return res.data;
    } catch (err) {
      console.error("ERROR Updating Product", err.response.data);
    }
  }

  static async deleteProduct(barcode) {
    try {
      let res = await axios.delete(`${BASE_URL}/api/products/${barcode}`);
    } catch (err) {
      console.error("ERROR Deleting Product", err.response.data);
    }
  }

  static async uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/photos/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data.url;
    } catch (err) {
      console.error("Error uploading image", err);
      throw err;
    }
  }

  static async updateProductPhoto(barcode, photoUrl) {
    try {
      console.log("URL", photoUrl);
      const response = await axios.patch(
        `${BASE_URL}/api/photos/update/${barcode}`,
        {
          photoUrl,
        }
      );
    } catch (err) {
      console.error("Error updating product photo", err);
      throw err;
    }
  }
}

export default GinsengApi;
