import axios from "axios";

const BASE_URL = "http://localhost:3001";
class SquareApi {
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
}

export default SquareApi;
