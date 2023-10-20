import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [regNo, setRegNo] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [batch, setBatch] = useState("1");
  const [dept, setDept] = useState("1");
  const [parent, setParent] = useState("");
  const [parentNo, setParentNo] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [dist, setDist] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !regNo ||
      !name ||
      !mobile ||
      !email ||
      !dob ||
      !parent ||
      !parentNo ||
      !parentNo ||
      !address ||
      !zip ||
      !city ||
      !dist
    ) {
      console.log("Error");
    } else {
      axios
        .post("http://localhost:3000/register", {
          regNo,
          name,
          mobile,
          email,
          dob,
          batch,
          dept,
          parent,
          parentNo,
          address,
          zip,
          city,
          dist,
          state,
        })
        .then((result) => {
          console.log(result);
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="mainContainer">
            <div className="leftContainer">
              <input
                type="text"
                placeholder="Register Number"
                name="regNo"
                onChange={(e) => setRegNo(e.target.value)}
              />
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Mobile Number"
                name="mobile"
                onChange={(e) => setMobile(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="calendar"
                placeholder="DOB"
                name="dob"
                onChange={(e) => setDob(e.target.value)}
              />
              <select>
                <option>Batch</option>
                <option>2019-2023</option>
                <option>2020-2024</option>
                <option>2021-2025</option>
              </select>
              <select>
                <option>Department</option>
                <option>MCA</option>
                <option>MBA</option>
                <option>CSE</option>
              </select>
            </div>
            <div className="rightContainer">
              <input
                type="text"
                placeholder="Father/Guardian"
                name="parent"
                onChange={(e) => setParent(e.target.value)}
              />
              <input
                type="text"
                placeholder="Father/Guardian Number"
                name="parentNo"
                onChange={(e) => setParentNo(e.target.value)}
              />
              <textarea
                className="address"
                type="text"
                placeholder="Address"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Zip"
                name="zip"
                onChange={(e) => setZip(e.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                name="city"
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="District"
                name="dsit"
                onChange={(e) => setDist(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
