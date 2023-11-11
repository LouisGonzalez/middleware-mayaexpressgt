"use strict";

const router = require("express").Router();

// var apiAuth = require("./api/auth/auth-router");
// router.use("/auth", apiAuth);

var apiTest = require("./api/test-router");
router.use("/test", apiTest);

var apiEmployee = require("./api/employee/employee-router");
router.use("/employee", apiEmployee);

var apiDestinations = require('./api/destination/destination-router');
router.use("/destinations", apiDestinations);

var apiWarehouse = require('./api/warehouse/warehouse-router');
router.use("/warehouse", apiWarehouse);

var apiBranch = require('./api/branch/branch-router');
router.use("/branch", apiBranch);

var apiVehicle = require('./api/vehicle/vehicle-router');
router.use("/vehicle", apiVehicle);

var apiAuthorization = require('./api/authorization/authorization-router');
router.use("/auth", apiAuthorization);

module.exports = router;
