const axios = require("axios");

const getTestEndpoint = async (req, res) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/admin/employee/all/",
      {
        headers: {
          Authorization: req.headers.authorization,
        },
      }
    );
    console.log(response.data);
    return res.status(200).send(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


module.exports = {
  getTestEndpoint
};
