import axios from "axios-jsonp-pro";

export default axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Content-type": "application/json"
  }
});