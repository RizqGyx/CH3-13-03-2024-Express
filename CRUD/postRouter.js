const { fs, customers } = require("./module");

const addNewCostumers = (req, res, next) => {
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
};

module.exports = { addNewCostumers };
