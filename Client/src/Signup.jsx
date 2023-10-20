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
  const [batch, setBatch] = useState("");
  const [dept, setDept] = useState("");
  const [parent, setParent] = useState("");
  const [parentNo, setParentNo] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [dist, setDist] = useState("");
  const [state, setState] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
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
                onChange={(e) => console.log(e.target.value)}
              />
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Mobile Number"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="calendar"
                placeholder="DOB"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
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
                name="name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Father/Guardian Number"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="address"
                type="text"
                placeholder="Address"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Zip"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="District"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <Link to="/login">
        <button className="Btn1">Sign Up</button>
      </Link>
    </div>
  );
};

export default Signup;
