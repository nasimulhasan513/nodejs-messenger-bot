const express = require("express");
const { getHomepage } = require("../controllers/homepageController");
const { postWebhook, getWebhook } = require("../controllers/chatBotController");

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", getHomepage);
  router.get("/webhook", getWebhook);
  router.post("/webhook", postWebhook);

  return app.use("/", router);
};

module.exports = initWebRoutes;
