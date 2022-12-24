import "./App.css";
import Input from "./components/Input";
import Weather from "./components/Weather";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const takeData = (data) => {
    setData(data);
  };
  return (
    <div className="app">
      <Input takeData={takeData} />
      <Weather data={data} />
    </div>
  );
}

export default App;
