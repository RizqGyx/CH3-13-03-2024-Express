const path = require("path");
const fs = require("fs");

const customers = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/dummy.json`)
);

module.exports = { fs, customers };
