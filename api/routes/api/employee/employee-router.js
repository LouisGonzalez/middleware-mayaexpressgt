"use strict";

const router = require("express").Router();
const EmployeeController = require("../../../controller/employees/employee-controller");

router.get("/", EmployeeController.getAll);
router.post("/", EmployeeController.create);
router.put("/:id", EmployeeController.update);
router.delete("/:id", EmployeeController.del);
router.put("/add/worker-to-branch", EmployeeController.workerToBranch)

module.exports = router;
