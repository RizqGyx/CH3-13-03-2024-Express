const { fs, customers } = require("./module");

const allCustomersData = (req, res, next) => {
  res.status(200).json({
    status: "success",
    totalData: customers.length,
    requestAt: req.requestTime,
    data: { customers },
  });
};

const dataById = (req, res, next) => {
  console.log(req.params);
  const id = req.params.id;

  const customer = customers.find((cust) => cust._id === id);
  console.log(customer ? customer : `Data dengan ID : ${id} Sudah Hilang`);

  if (!customer) {
    return res.status(404).json({
      status: "Fail",
      message: `Customer with ID : ${id} not found`,
    });
  }

  res.status(200).json({
    status: "Success",
    data: {
      customer,
    },
  });
};

const dataUsingParams = (req, res, next) => {
  console.log(req.params);

  // const reqParamsId = req.params.id;
  // console.log({ reqParamsId });

  // const { id, name, position } = req.params;
  // console.log({ id });
  // console.log({ name });
  // console.log({ position });

  res.status(200).json({
    status: "success",
    totalData: customers.length,
    data: { customers },
  });
};

module.exports = { allCustomersData, dataById, dataUsingParams };
