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

module.exports = { updatePatchById };
