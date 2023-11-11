"use strict";

const router = require("express").Router();
const PriceController = require("../../../controller/price/price-controller");

router.get("/", PriceController.getAll);
router.put("/:id", PriceController.update);
router.get("/:idOrigin/:idDestination", PriceController.getPrice);
router.post("/send", PriceController.send);

module.exports = router;
