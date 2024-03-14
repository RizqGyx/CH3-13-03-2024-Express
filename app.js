const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

const app = express();
const port = 3000;

// Middleware Untuk Membaca Json Dari Request Body
app.use(express.json());

const customers = JSON.parse(
  fs.readFileSync(`${__dirname}/data/dummy.json`)
);

app.get("/", (req, res) => {
  res.send("Welcome To Get Express");
});

app.get("/api/v1/customers", (req, res) => {
  res.status(200).json({
    status: "success",
    totalData: customers.length,
    data: { customers },
  });
});

app.post("/api/v1/customers", (req, res) => {
  console.log(req.body);
  const newCustomer = req.body;

  customers.push(newCustomer);
  fs.writeFile(
    `${__dirname}/data/dummy.json`,
    JSON.stringify(customers),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          customer: newCustomer,
        },
      });
    }
  );
});

app.listen(port, () => {
  console.log(`App Running On : http://localhost:${port}`);
});

// console.log({ express });
