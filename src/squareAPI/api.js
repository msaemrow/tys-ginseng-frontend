import axios from "axios";

const BASE_URL = "http://localhost:3001";

class GinsengApi {
  static async generateCheckoutUrl(shoppingCart, shipping) {
    console.log("GINSENG API", shipping);
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
