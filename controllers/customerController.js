const fs = require("fs");

const customers = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/dummy.json`)
);

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

const updatePatchById = (req, res, next) => {
  console.log(req.params);
  const id = req.params.id;

  // 1. Melakukan Pencarian Data Berdasarkan Parameter ID
  const customer = customers.find((cust) => cust._id === id);
  const customerIndex = customers.findIndex((cust) => cust._id === id);

  // 2. Apakah Ada Atau Tidak Data Berdasrkan ID Tadi
  if (!customer) {
    return res.status(404).json({
      status: "Fail",
      message: `Customer with ID : ${id} not found`,
    });
  }

  // 3.Kalau Ada Akan Dilakukan Update Sesuai Requst Body dari Client
  // Object Assign = menggabungkan object OR menggunakan spread operator
  customers[customerIndex] = { ...customers[customerIndex], ...req.body };

  // 4.Melakukan update di dokumen JSON
  fs.writeFile(
    `${__dirname}/data/dummy.json`,
    JSON.stringify(customers),
    (err) => {
      res.status(200).json({
        status: "Success",
        message: "Berhasil Update Data",
        // data Di Comment Karena Yang ditampilkan yang sebelum di update
        // data: {
        //   customers: customer[customerIndex],
        //   customer,
        // },
      });
    }
  );
};

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

const deleteById = (req, res, next) => {
  console.log(req.params);
  const id = req.params.id;

  // 1. Melakukan Pencarian Data Berdasarkan Parameter ID
  const customer = customers.find((cust) => cust._id === id);
  const customerIndex = customers.findIndex((cust) => cust._id === id);

  // 2. Apakah Ada Atau Tidak Data Berdasrkan ID Tadi
  if (!customer) {
    return res.status(404).json({
      status: "Fail",
      message: `Customer with ID : ${id} not found`,
    });
  }

  // 3. Kalau Ada Akan Dilakukan Delete
  customers.splice(customerIndex, 1);

  // 4.Melakukan update di dokumen JSON dengan data yang telah di delete
  fs.writeFile(
    `${__dirname}/data/dummy.json`,
    JSON.stringify(customers),
    (err) => {
      res.status(200).json({
        status: "Success",
        message: "Berhasil Delete Data",
        // data Di Comment Karena Yang ditampilkan yang sebelum di update
        // data: {
        //   customers: customer[customerIndex],
        //   customer,
        // },
      });
    }
  );
};

module.exports = {
  allCustomersData,
  dataById,
  dataUsingParams,
  updatePatchById,
  addNewCostumers,
  deleteById,
};
