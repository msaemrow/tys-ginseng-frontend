import axios from "axios";

const BASE_URL = "/api";
class GinsengApi {
  static async generateCheckoutUrl(shoppingCart, shipping) {
    try {
      let res = await axios.post(`${BASE_URL}/payment/create`, {
        products: shoppingCart,
        shippingCharge: shipping,
      });
      return res.data;
    } catch (err) {
      console.error("ERROR. ", err);
    }
  }
}

export default GinsengApi;
