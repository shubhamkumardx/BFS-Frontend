import axios from "axios";

const request = {
  GetAccountList: async () => {
    try {
      const response = await axios.get("http://localhost:5000/accounts");
      console.log(response)
    } catch (error) {

    }
  },
};

export default request;
