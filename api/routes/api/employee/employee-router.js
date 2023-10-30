"use strict";

const router = require("express").Router();
const EmployeeController = require("../../../controller/employees/employee-controller");

router.get("/", EmployeeController.getAll);
router.post("/", EmployeeController.create);
router.put("/:id", EmployeeController.update);
router.delete("/:id", EmployeeController.del);

module.exports = router;
