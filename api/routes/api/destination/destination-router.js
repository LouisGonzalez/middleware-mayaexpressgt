"use strict";

const router = require("express").Router();
const DestinationController = require("../../../controller/destinations/destination-controller");

router.get("/", DestinationController.getAll);

module.exports = router;
