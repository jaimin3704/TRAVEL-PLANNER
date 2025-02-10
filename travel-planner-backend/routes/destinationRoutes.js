const express = require("express");
const router = express.Router();
const { getDestinations } = require("../controllers/destinationController");  // ✅ Check path

router.get("/", getDestinations);

module.exports = router;
