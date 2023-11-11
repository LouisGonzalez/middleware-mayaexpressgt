const axios = require("axios");
require("dotenv").config();
const BACKEND_URL = process.env.BACKEND_URL;

const getAll = async (req, res) => {
  try {
    // const response = await axios.get(
    //   `${BACKEND_URL}/admin/vehicles/all/`
    //   //   {
    //   //     headers: {
    //   //       Authorization: req.headers.authorization,
    //   //     },
    //   //   }
    // );
    // return res.status(200).send(response.data);

    return res.status(200).send({
        content: [
            {
                id: 1,
                max_weight: 100,
                plate: "ABCX123",
                vehicle_type: 1,
                shipment_id: 1
            }
        ]
    })
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const create = async (req, res) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/admin/employee`,
      req.body
      // {
      //     headers: {
      //         Authorization: req.headers.authorization
      //     }
      // }
    );
    return res.status(200).send({
        message: "El vehiculo se creo con exito"
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const response = await axios.put(
      `${BACKEND_URL}/admin/employee/${req.params.id}`,
      req.body
      // {
      //     headers: {
      //         Authorization: req.headers.authorization
      //     }
      // }
    );
    return res.status(200).send({
        message: "El vehiculo se actualizo con exito"
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const del = async (req, res) => {
  try {
    console.log("holiwis");
    const response = await axios.delete(
      `${BACKEND_URL}/admin/employee/${req.params.id}`
    );
    return res.status(200).send({
        message: "El vehiculo se elimino con exito"
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const vehicleToBranch = async(req, res) => {
    try {
        return res.status(200).send({
            message: "El vehiculo fue asignado con exito"
        })
    } catch(error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
  getAll,
  create,
  update,
  del,
  vehicleToBranch
};
