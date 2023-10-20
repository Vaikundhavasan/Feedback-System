const mongoose = require("mongoose");

const EmployeeSchema1 = new mongoose.Schema({
  Q1: String,
  Q2: String,
  Q3: String,
  Q4: String,
  Q5: String,
});

const EmployeeModel1 = mongoose.model("employees1", EmployeeSchema1);
module.exports = EmployeeModel1;
