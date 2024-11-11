import axios from "axios";

const BASE_URL = "http://localhost:3001";
//BASE URL ONLY NEEDED FOR LOCAL USAGE. REMOVE BASE_URL FOR PRODUCTION
class GinsengApi {
  static async addProduct(product) {
    try {
      let res = await axios.post(`/api/products`, product);
      return res.data;
    } catch (err) {
      console.error("Error creating product.", err.response.data.error);
    }
  }

  static async getAllProducts() {
    try {
      let res = await axios.get(`/api/products/all`);
      return res.data;
    } catch (err) {
      console.error("ERROR. ", err.response.data);
    }
  }

  static async getProduct(barcode) {
    try {
      let res = await axios.get(`/api/products/${barcode}`);
      return res.data;
    } catch (err) {
      console.error("ERROR. ", err.response.data);
    }
  }

  static async updateProduct(barcode, product) {
    try {
      let res = await axios.patch(`/api/products/${barcode}`, product);
      return res.data;
    } catch (err) {
      console.error("ERROR Updating Product", err.response.data);
    }
  }

  static async deleteProduct(barcode) {
    try {
      let res = await axios.delete(`/api/products/${barcode}`);
    } catch (err) {
      console.error("ERROR Deleting Product", err.response.data);
    }
  }

  static async uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`/api/photos/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.url;
    } catch (err) {
      console.error("Error uploading image", err);
      throw err;
    }
  }

  static async updateProductPhoto(barcode, photoUrl) {
    try {
      const response = await axios.patch(`$/api/photos/update/${barcode}`, {
        photoUrl,
      });
    } catch (err) {
      console.error("Error updating product photo", err);
      throw err;
    }
  }
}

export default GinsengApi;
