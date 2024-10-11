import axios from "axios";

const BASE_URL = "/api";
const TEST_BASE_URL = "http://localhost:3001/api";
class GinsengApi {
  static async generateCheckoutUrl(shoppingCart, shipping) {
    try {
      let res = await axios.post(`/api/payment/create`, {
        products: shoppingCart,
        shippingCharge: shipping,
      });
      return res.data;
    } catch (err) {
      console.error("ERROR. ", err);
    }
  }

  static async getProducts() {
    try {
      let res = await axios.get(`${TEST_BASE_URL}/products/all`);
      return res.data;
    } catch (err) {
      console.error("ERROR. ", err);
    }
  }

  static async getSingleProduct(barcode) {
    try {
      let res = await axios.get(`${TEST_BASE_URL}/products/${barcode}`);
      return res.data;
    } catch (err) {
      console.error("ERROR", err);
    }
  }
}

export default GinsengApi;
