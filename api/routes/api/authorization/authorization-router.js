"use strict";

const router = require("express").Router();
const AuthorizationController = require("../../../controller/authorization/authorization-controller");

router.post("/sign-in", AuthorizationController.signIn);

module.exports = router;
