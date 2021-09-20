const express = require("express");

const route = express.Router();
const translateController = require("./controllers/index");

route.post("/translate", translateController.getTranslationResponse);

module.exports = route;
