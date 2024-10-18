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
}

export default GinsengApi;
