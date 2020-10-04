import React from "react";

const WeatherDay = (props) => {
  return <div className="dayWeatherWrap" key={props.dayweather.i}>
  <h4>{props.dayweather.day}</h4>
  <h3>{props.dayweather.temp}&deg;C</h3>
  <p>{props.dayweather.desc}</p>
</div>
}

export default WeatherDay;