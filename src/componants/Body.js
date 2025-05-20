import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Body.css"; // 👈 Import the CSS file

function Body() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    const response = await axios.post("http://localhost:3046/assessment");
    const leads = response.data.data.data;
    setDatas(leads);
  };

  return (
    <div className="body-container">
      <h2 className="body-heading">Lead Information</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.Full_Name}</td>
              <td>{item.Mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Body;
