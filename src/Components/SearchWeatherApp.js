import React, { useState, useEffect } from "react";
import NavBar from "./NavBar" ; 
import "./WeatherApp.css";
import clear_icon from "./Assets/clear.png";
import cloud_icon from "./Assets/cloud.png";
import drizzle_icon from "./Assets/drizzle.png";
import humidity_icon from "./Assets/humidity.png";
import rain_icon from "./Assets/rain.png";
import search_icon from "./Assets/search.png";
import snow_icon from "./Assets/snow.png";
import wind_icon from "./Assets/wind.png";
const SearchWeatherApp = () => {
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [temp, setTemp] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("Jeddah");
  const [image, setImage] = useState(null);

  const API_Key = "def9b8c8d1ea50e059198e781cfbf8f3";

  const fetchWeather = async () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${API_Key}`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setTemp(data.main.temp);
        setLocation(data.name);

        // Determine which icon to display using your if structure
        const iconCode = data.weather[0].icon;
        if (iconCode === "01d" || iconCode === "01n") {
          setImage(clear_icon);
        } else if (iconCode === "02d" || iconCode === "02n") {
          setImage(cloud_icon);
        } else if (iconCode === "03d" || iconCode === "03n") {
          setImage(drizzle_icon);
        } else if (iconCode === "04d" || iconCode === "04n") {
          setImage(drizzle_icon);
        } else if (iconCode === "09d" || iconCode === "09n") {
          setImage(rain_icon);
        } else if (iconCode === "10d" || iconCode === "10n") {
          setImage(rain_icon);
        } else if (iconCode === "13d" || iconCode === "13n") {
          setImage(snow_icon);
        } else {
          setImage(clear_icon);
        }
      } else {
        console.error("Error fetching weather data:", data.message);
      }
    } catch (error) {
      console.error("Network error:", error.message);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []); // Empty dependency array for running once

  const handleSearchClick = () => {
    fetchWeather();
  };

  return (
    <div className="container">
      <NavBar />
    
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="search-icon" onClick={handleSearchClick}>
          <img src={search_icon} alt="Search" />
        </div>
      </div>
      <div className="weather-image">
        <img src={image} alt="Weather icon" />
      </div>
      <div className="weather-temp">{temp}°C</div>
      <div className="weather-location">{location}</div>
      <div className="data-container">
        <div className="element">
          <img className="icon" src={humidity_icon} alt="Humidity" />
          <div className="data">
            <div className="humidity-percent">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img className="icon" src={wind_icon} alt="Wind" />
          <div className="data">
            <div className="wind-rate">{wind} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeatherApp;
