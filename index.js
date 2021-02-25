const express = require("express");
const cors = require("cors");
const initWebRoutes = require("./src/routes/web");
const configViewEngine = require("./src/config/viewEngine");

let app = express();

app.use(cors());

initWebRoutes(app);
configViewEngine(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("app is running at port" + PORT);
});
