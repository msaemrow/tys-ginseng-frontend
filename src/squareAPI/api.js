import axios from "axios";

const BASE_URL = "http://localhost:3001";

class GinsengApi {
  static async generateCheckoutUrl(shoppingCart) {
    try {
      let res = await axios.post(`${BASE_URL}/payment/create`, {
        products: shoppingCart,
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.error("ERROR. ", err);
    }
  }
}

export default GinsengApi;
