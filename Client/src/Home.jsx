import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");
  const navigate = useNavigate();

  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log("Hello");

    axios
      .post("http://localhost:3000/query", { Q1, Q2, Q3, Q4, Q5 })
      .then((result) => {
        console.log(result);
        navigate("/message");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="qn-container">
        <form onSubmit={handleSubmit1}>
          <h1 className="title">Feedback</h1>
          <input
            type="text"
            placeholder="Register Number"
            name="email"
            onChange={(e) => setQ1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Student"
            name="email"
            onChange={(e) => setQ2(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject Matter Organized in logical Squenece"
            name="email"
            onChange={(e) => setQ3(e.target.value)}
          />
          <input
            type="text"
            placeholder="Knowledge of Faculty in that particular subjects"
            name="email"
            onChange={(e) => setQ4(e.target.value)}
          />
          <input
            type="text"
            placeholder="Faculty member completes the syllabus in time?"
            name="email"
            onChange={(e) => setQ5(e.target.value)}
          />

          <button className="Btn5" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
