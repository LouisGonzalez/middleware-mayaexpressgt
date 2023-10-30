const axios = require("axios");
require("dotenv").config();
const BACKEND_URL = process.env.BACKEND_URL;

const getAll = async (req, res) => {
  try {

    // const response = await axios.get(
    //   `${BACKEND_URL}/admin/destinations/all/`
    //   //   {
    //   //     headers: {
    //   //       Authorization: req.headers.authorization,
    //   //     },
    //   //   }
    // );

    return res.status(200).send({
      content: [
        {
          id: 1,
          name: "Quetzaltenango",
          region: "Occidente",
        },
      ],
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAll,
};
