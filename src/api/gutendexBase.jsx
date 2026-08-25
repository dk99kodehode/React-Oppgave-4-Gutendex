import axios from "axios";

export const api_gutendex = axios.create({
  baseURL: env.Gutendex_Base,
  headers: {
    // pretty much a must have!!//
    Authorization,
  },
});
