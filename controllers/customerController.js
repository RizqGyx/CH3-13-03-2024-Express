const fs = require("fs");
const Customer = require("../models/customerModel");

// const customers = JSON.parse(
//   fs.readFileSync(`${__dirname}/../data/dummy.json`)
// );

const allCustomersData = async (req, res) => {
  try {
    const customers = await Customer.find();

    res.status(200).json({
      status: "success",
      totalData: customers.length,
      requestAt: req.requestTime,
      data: { customers },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "failed", message: err.message });
  }
};

const dataById = async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findById(id);

    res.status(200).json({
      status: "Success",
      data: {
        customer,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "failed", message: err.message });
  }
};

const dataUsingParams = (req, res) => {
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

const updatePatchById = async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "Success",
      message: "Berhasil Update Data",
      data: { customer },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "failed", message: err.message });
  }
};

const addNewCostumers = async (req, res) => {
  // ====== console.log(req.body);
  // ====== const newCustomer = req.body;

  try {
    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        customer: newCustomer,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "failed", message: err.message });
  }

  // ====== customers.push(newCustomer);
  // fs.writeFile(
  //   `${__dirname}/data/dummy.json`,
  //   JSON.stringify(customers),
  //   (err) => {
  //     res.status(201).json({
  //       status: "success",
  //       data: {
  //         customer: newCustomer,
  //       },
  //     });
  //   }
  // );
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findByIdAndDelete(id);

    res.status(200).json({
      status: "Success",
      message: "Berhasil Delete Data",
      data: {
        customer,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "failed", message: err.message });
  }
};

module.exports = {
  allCustomersData,
  dataById,
  dataUsingParams,
  updatePatchById,
  addNewCostumers,
  deleteById,
};
