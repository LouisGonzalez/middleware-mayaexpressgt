const axios = require("axios");
require("dotenv").config();
const BACKEND_URL = process.env.BACKEND_URL;

const getAll = async (req, res) => {
  try {
    // const response = await axios.get(
    //   `${BACKEND_URL}/admin/warehouse/all/`
    //   //   {
    //   //     headers: {
    //   //       Authorization: req.headers.authorization,
    //   //     },
    //   //   }
    // );

    console.log("hoal");
    return res.status(200).send({
      content: [
        {
          id: 1,
          squareMeters: 2,
          address: "3ra. Calle Zona 3, Quetzaltenango",
          maxWeightLbs: 300,
          isEnable: true,
        },
      ],
    });

    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const create = async (req, res) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/admin/warehouse`,
      req.body
      // {
      //     headers: {
      //         Authorization: req.headers.authorization
      //     }
      // }
    );
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const response = await axios.put(
      `${BACKEND_URL}/admin/warehouse/${req.params.id}`,
      req.body
      // {
      //     headers: {
      //         Authorization: req.headers.authorization
      //     }
      // }
    );
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const del = async (req, res) => {
  try {
    console.log("holiwis");
    const response = await axios.delete(
      `${BACKEND_URL}/admin/warehouse/${req.params.id}`
    );
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAll,
  create,
  update,
  del,
};
