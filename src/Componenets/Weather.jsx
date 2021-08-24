import React from "react";
const Weather = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="weather">
      {data.cod !== 404 ? (
        <React.Fragment>
          <div className="section1">
            <div className="mainCard">
              <span className="cardTitle">
                {data.name},{data.sys.country}.weather
              </span>
              <span className="cardsubtitle">
                As of {new Date().toLocaleTimeString()}
              </span>
              <h1>{Math.floor(data.main.temp - 273.15)}&deg;</h1>
              <span className="weather-main">{data.weather[0].main}</span>
              <img src="" alt="" className="weather-icon" />
              <span className="weather-description">
                {data.weather[0].description}
              </span>
            </div>
            <div className="weather-details">
              <h4>High/Low</h4>
              <span>{Math.floor(data.main.temp_max - 273.15)}&deg;</span>
              <span>{Math.floor(data.main.temp_min - 273.15)}&deg;</span>
              <h4>humidity</h4>
              <span>{data.main.humidity}%</span>
              <h4>Pressure</h4>
              <span>{data.main.pressure}</span>
              <h4>Visibility</h4>
              <span>{data.visibility / 1000} km</span>
              <h4>Wind</h4>
              <span>{Math.floor(data.wind.speed * 18) / 5}km/hr</span>
              <h4>Wind Direction</h4>
              <span>{data.wind.deg}&deg;</span>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincart">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
};

export default Weather;
