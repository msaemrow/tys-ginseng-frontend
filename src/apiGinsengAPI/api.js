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
}

export default GinsengApi;
