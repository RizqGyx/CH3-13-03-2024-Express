const path = require("path");
const fs = require("fs");

const currentDirectory = __dirname;
const parentDirectory = path.join(currentDirectory, "..");
const customers = JSON.parse(
  fs.readFileSync(path.join(parentDirectory, "data", "dummy.json"))
);

module.exports = { fs, customers };
