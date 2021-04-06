import React, { useState, useEffect } from "react";
import "./../assets/cities.css";
import { api } from "./../constants/ApiConstants";
export function Cities() {
  const [newCity, setNewCity] = useState("");
  const [weather, setWeather] = useState(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(weather);
  }, [weather]);

  function searchWeather() {
    fetch(`${api.base}/weather?q=${newCity}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((json) => {
        setWeather(json);
        setNewCity("");
        setLoading(false);
      })
      .catch((err) => alert(err));
  }

  function dateBuilder(datum) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesay",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[datum.getDay()];
    let date = datum.getDate();
    let month = months[datum.getMonth()];
    let year = datum.getFullYear();
    return `${day} ${date} ${month} ${year}`;
    
  }
  return (
    <div
      className={
        weather
          ? weather.main.temp > 15
            ? "cities warm"
            : "cities cold"
          : "cities"
      }
    >
      <h2>Cities</h2>
      <div className="search-box">
        <div className='search-box-container'>
          <input
            type="text"
            placeholder="Enter city"
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
            className="search-bar"
          ></input>
          <button onClick={searchWeather} className="search-button">
            Search
          </button>
        </div>
      </div>
      {weather && (
        <div className="location-container">
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)} &#8451;</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      )}
      {loading && <div className="loader"></div>}
    </div>
  );
}
