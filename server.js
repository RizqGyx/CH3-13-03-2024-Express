require("dotenv").config();
const app = require("./app.js");

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Connection To Database Success",
  });
});

app.listen(port, () => {
  console.log(`App Running On : http://localhost:${port}`);
});
