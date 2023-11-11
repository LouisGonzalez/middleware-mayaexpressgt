const axios = require("axios");
require("dotenv").config();
const BACKEND_URL = process.env.BACKEND_URL;

const signIn = async (req, res) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/auth/signin`,
      req.body
    );
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
    signIn
};
