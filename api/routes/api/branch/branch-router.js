"use strict";

const router = require("express").Router();
const BranchController = require("../../../controller/branches/branch-controller");

router.get("/", BranchController.getAll);
router.post("/", BranchController.create);
router.put("/:id", BranchController.update);
router.delete("/:id", BranchController.del);
router.get("/spents/get-all", BranchController.getSpentTypes)
router.post("/spents/new-spent", BranchController.createSpent)

module.exports = router;
