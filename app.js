const express = require("express");
const fs = require("fs");
// const morgan = require("morgan");

// Refactor
const getRoute = require("./routes/getRouter");
const postRoute = require("./routes/postRouter");
const patchRoute = require("./routes/patchRouter");
const deleteRoute = require("./routes/deleteRouter");

const app = express();
const port = 3000;

// Middleware Untuk Membaca Json Dari Request Body
app.use(express.json());

const customers = JSON.parse(fs.readFileSync(`${__dirname}/data/dummy.json`));

app.get("/", getRoute.defaultRouter);
app.get("/api/v1/customers/:id/:name/:position", getRoute.dataUsingParams);
app
  .route("/api/v1/customers/:id")
  .get(getRoute.dataById)
  .patch(patchRoute.updatePatchById)
  .delete(deleteRoute.deleteById);
app
  .route("/api/v1/customers")
  .get(getRoute.allCustomersData)
  .post(postRoute.addNewCostumers);

app.listen(port, () => {
  console.log(`App Running On : http://localhost:${port}`);
});
