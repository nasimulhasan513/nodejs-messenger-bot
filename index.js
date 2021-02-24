const express = require("express");
const cors = require("cors");

let app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Success",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("app is running at port" + PORT);
});
