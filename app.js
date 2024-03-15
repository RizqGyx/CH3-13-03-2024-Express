const express = require("express");
const morgan = require("morgan");

// Refactor
const customerRoute = require("./routes/customerRoutes");

const app = express();
const port = 3000;

// Middleware Untuk Membaca Json Dari Request Body
app.use(express.json());

// Middleware dari third party = 3rd party middleware
app.use(morgan("dev"));

// Middleware Kita Sendiri
app.use((req, res, next) => {
  console.log("Hello FSW 1, ini middleware kita sendiri..");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

app.use("/api/v1/customers", customerRoute);

// app
//   .route("/api/v1/customers/:id")
//   .get(getRoute.dataById)
//   .patch(patchRoute.updatePatchById)
//   .delete(deleteRoute.deleteById);
// app
//   .route("/api/v1/customers")
//   .get(getRoute.allCustomersData)
//   .post(postRoute.addNewCostumers);

app.listen(port, () => {
  console.log(`App Running On : http://localhost:${port}`);
});
