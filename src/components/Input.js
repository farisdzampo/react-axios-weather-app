import "../App.css";
import React from "react";
import axios from "axios";
import { useState } from "react";

const Input = (props) => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a5059a70f04606a2937aefcc20d35ec2`;

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await axios.get(url).then((res) => {
      const data = res.data;
      setData(data);
      props.takeData(data);
    });
    setLocation("");
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        value={location}
        type="text"
        placeholder="Enter location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default Input;
