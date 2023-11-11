const axios = require("axios");
require("dotenv").config();
const BACKEND_URL = "http://localhost:8080/api/shipment";

const getAll = async (req, res) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/price`,
      {
        headers: {
          Authorization: req.headers.authorization
        }
      }
    );
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/price/${req.params.id}`,
      req.body,
      {
        headers: {
          Authorization: req.headers.authorization
        }
      }
    );
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getPrice = async (req, res) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/price/${req.params.idOrigin}/${req.params.idDestination}`,
      {
        headers: {
          Authorization: req.headers.authorization
        }
      }
    );
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const send = async (req, res) => {
  try {
    console.log(req.body);
    const response = await axios.post(
      `${BACKEND_URL}/send`,
      req.body,
      {
        headers: {
          Authorization: req.headers.authorization
        }
      }
    );
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAll,
  update,
  getPrice,
  send,
};
