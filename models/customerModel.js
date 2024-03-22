const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, { useNewUrlParser: true }).then((con) => {
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
    required: true,
    enum: ["male", "female"],
  },
  company: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email Cannot Be Empty"],
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
    type: String,
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

module.exports = Customer;
