"use strict";

const router = require("express").Router();
const WarehouseController = require("../../../controller/warehouses/warehouse-controller");

router.get("/", WarehouseController.getAll);
router.post("/", WarehouseController.create);
router.put("/:id", WarehouseController.update);
router.delete("/:id", WarehouseController.del);
router.get("/:id/get-packages", WarehouseController.packagesByWarehouse)

module.exports = router;
