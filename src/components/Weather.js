import React from "react";
import "../App.css";

const Weather = (props) => {
  return (
    <div className="content">
      <div className="top">
        <div className="location">
          {props.data ? <h2>{props.data.name}</h2> : null}
        </div>
        <div className="temp">
          {props.data.main ? <h1>{props.data.main.temp}° F</h1> : null}
        </div>
        <div className="weather">
          {props.data.weather ? <p>{props.data.weather[0].main}</p> : null}
        </div>
      </div>
      {props.data.main !== undefined && (
        <div className="bottom">
          <div className="feels_like">
            {props.data.main ? <p>{props.data.main.feels_like}° F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {props.data.main ? <p>{props.data.main.humidity} %</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {props.data.wind ? <p>{props.data.wind.speed} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
