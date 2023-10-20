const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  regNo: String,
  name: String,
  mobileNo: String,
  dob: String,
  batch: String,
  dept: String,
  parent: String,
  parentNo: String,
  address: String,
  zip: String,
  city: String,
  dist: String,
  state: String,
});

const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;
