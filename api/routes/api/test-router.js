"use strict";

const router = require("express").Router();
const TestController = require("../../controller/test-controller");

router.get("/", TestController.getTestEndpoint);

module.exports = router;
