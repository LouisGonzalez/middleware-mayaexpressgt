"use strict";

const router = require("express").Router();
const VehicleController = require("../../../controller/vehicles/vehicle-controller");

router.get("/", VehicleController.getAll);
router.post("/", VehicleController.create);
router.put("/:id", VehicleController.update);
router.delete("/:id", VehicleController.del);
router.put("/add/vehicle-to-branch", VehicleController.vehicleToBranch)

module.exports = router;
