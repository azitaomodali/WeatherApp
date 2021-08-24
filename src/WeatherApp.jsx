import React, { useState } from "react";
import "weather-icons/css/weather-icons.css";
import Weather from "./Componenets/Weather";
import "./Componenets/Weather.css";

const API_KEY = "24aad7ed2210857ee6ce341a8e9972e2";

const WeatherApp = () => {
  const [form, setForm] = useState({
    city: "",
    country: "",
  });
  const [weather, setWeather] = useState([]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "" && form.country === "") {
      alert(" Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      setWeather({
        data: data,
      });
    }
  }

  return (
    <div className="weatherApp">
      <span className="title">WeatherApp</span>

      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="getWeather"
          onClick={(e) => weatherData(e)}
        >
          submit
        </button>
      </form>

      {weather.data !== undefined ? (
        <div>
          <Weather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
};

export default WeatherApp;
