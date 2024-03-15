const express = require("express");

const {
  allCustomersData,
  dataById,
  dataUsingParams,
  updatePatchById,
  addNewCostumers,
  deleteById,
} = require("../controllers/customerController");

const router = express.Router();

router.route("/").get(allCustomersData).post(addNewCostumers);
router.route("/:id").get(dataById).patch(updatePatchById).delete(deleteById);
router.route("/:id/:name/:position").get(dataUsingParams);

module.exports = router;
