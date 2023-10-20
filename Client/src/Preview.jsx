import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Preview.css";

const Preview = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container1">
      <h1> Feedback Form </h1>
      <table>
        <thead>
          <tr>
            <th>Teacher Comes to Class on time</th>
            <th>Teaching is well planned</th>
            <th>Subject Matter Organized in logical Squenece</th>
            <th>Knowledge of Faculty in that particular subjects</th>
            <th>Faculty member completes the syllabus in time?</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.Q1}</td>
                <td>{user.Q2}</td>
                <td>{user.Q3}</td>
                <td>{user.Q4}</td>
                <td>{user.Q5}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Preview;
