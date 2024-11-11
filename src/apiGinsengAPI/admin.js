import axios from "axios";

const BASE_URL = "http://localhost:3001";

class AdminApi {
  static async loginAdmin(admin) {
    try {
      let res = await axios.post(`${BASE_URL}/api/user/login`, admin);
      return { token: res.data.token };
    } catch (err) {
      console.error("Error logging in admin.", err.response.data.error);
    }
  }
}

export default AdminApi;
