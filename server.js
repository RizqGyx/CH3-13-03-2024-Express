require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app.js");

const port = process.env.PORT;

const DB = process.env.DATABASE;

mongoose.connect(DB, { useNewUrlParser: true }).then((con) => {
  // console.log(con);
  console.log("Connection Success");
});

const customerSchema = mongoose.Schema({
  index: {
    type: Number,
    required: true,
    unique: true,
  },
  guid: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  eyeColor: {
    type: String,
    required: true,
    default: "Black",
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: [true, "Gender Must Be Binary"],
    default: "Anonymous",
  },
  company: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  registered: {
    type: Date,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  friends: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  greeting: {
    type: String,
    required: true,
  },
  favoriteFruit: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

const customerTest = new Customer({
  index: 3,
  guid: "05a3eb4e-b1a3-40d1-b974-e8b713b61df1",
  isActive: false,
  balance: "$1,925.28",
  picture: "http://placehold.it/32x32",
  age: 29,
  eyeColor: "brown",
  name: "Melba Ferguson",
  gender: "female",
  company: "CORECOM",
  email: "melbaferguson@corecom.com",
  phone: "+1 (821) 470-2946",
  address: "848 Newkirk Avenue, Nicut, Oklahoma, 4021",
  about:
    "Consectetur in do et exercitation anim irure irure est. Anim eu in voluptate qui velit elit voluptate labore ea pariatur labore consequat enim. Qui sit amet dolore laborum mollit nulla consectetur aliqua aliquip labore quis. Adipisicing do adipisicing cupidatat Lorem deserunt labore ad ullamco ullamco irure sit ipsum.\r\n",
  registered: new Date("2023-04-02T08:51:20-07:00"),
  latitude: 17.529952,
  longitude: 147.923381,
  tags: ["velit", "aliqua", "magna", "qui", "tempor", "eiusmod", "cillum"],
  friends: [
    { id: 0, name: "Simon Kemp" },
    { id: 1, name: "Taylor Savage" },
    { id: 2, name: "Debora Pace" },
  ],
  greeting: "Hello, Melba Ferguson! You have 3 unread messages.",
  favoriteFruit: "strawberry",
});

customerTest.save();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Connection To Database Success",
  });
});

app.listen(port, () => {
  console.log(`App Running On : http://localhost:${port}`);
});
