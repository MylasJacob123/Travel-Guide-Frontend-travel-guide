import React, { useState, useEffect } from "react";
import "./Weather.css";

function Weather({ setLocation, initialLocation, setAttractions }) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [attractions, setAttractionsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "9f62ada4458337c8090427bcadd88a95";
  const GOOGLE_API_KEY = "AIzaSyB481IL4ZxlW9g8HrpFGOJ1pdJafQj1YjQ";

  const fetchAttractions = async (lat, lng) => {
    try {
      const response = await fetch(
        `/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=tourist_attraction&key=${GOOGLE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch attractions");
      }

      const data = await response.json();
      setAttractionsData(data.results);
      setAttractions(data.results);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const fetchWeatherByCity = async () => {
    if (!city) return;
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setWeatherData(data);

      if (data.coord) {
        setLocation({ lat: data.coord.lat, lng: data.coord.lon });
        fetchAttractions(data.coord.lat, data.coord.lon);
        fetchForecastByCoordinates(data.coord.lat, data.coord.lon);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoordinates = async ({ lat, lng }) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setWeatherData(data);
      fetchForecastByCoordinates(lat, lng);
      fetchAttractions(lat, lng);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchForecastByCoordinates = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch forecast data");
      }

      const data = await response.json();
      setForecast(data.list);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherByCity();
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherImage = (description) => {
    if (!description) {
      return {
        url: "https://img.icons8.com/?size=100&id=HvsrTtUGylxy&format=png&color=000000",
        alt: "Default Weather",
        explanation: "Weather image not available yet.",
      };
    }

    switch (description.toLowerCase()) {
      case "clear sky":
        return {
          url: "https://www.weatherbit.io/static/img/icons/c01d.png",
          alt: "Clear Skies",
          explanation: "The sky is clear with no clouds.",
        };
      case "few clouds":
        return {
          url: "https://www.weatherbit.io/static/img/icons/c02d.png",
          alt: "Few Clouds",
          explanation: "There are a few clouds in the sky.",
        };
      case "scattered clouds":
        return {
          url: "https://www.weatherbit.io/static/img/icons/c02d.png",
          alt: "Scattered Clouds",
          explanation: "There are scattered clouds in the sky.",
        };
      case "broken clouds":
        return {
          url: "https://www.weatherbit.io/static/img/icons/c03d.png",
          alt: "Broken Clouds",
          explanation: "The sky is mostly covered with clouds.",
        };
      case "overcast clouds":
        return {
          url: "https://www.weatherbit.io/static/img/icons/c04d.png",
          alt: "Overcast Clouds",
          explanation: "The sky is completely covered with clouds.",
        };
      case "shower rain":
        return {
          url: "https://www.weatherbit.io/static/img/icons/r01d.png",
          alt: "Shower Rain",
          explanation: "There is light rain.",
        };
      case "rain":
        return {
          url: "https://www.weatherbit.io/static/img/icons/r01d.png",
          alt: "Rain",
          explanation: "It is raining with varying intensity.",
        };
      case "light rain":
        return {
          url: "https://www.weatherbit.io/static/img/icons/r01d.png",
          alt: "Light Rain",
          explanation: "There is light rain.",
        };
      case "thunderstorm":
        return {
          url: "https://www.weatherbit.io/static/img/icons/t01d.png",
          alt: "Thunderstorm",
          explanation: "There are thunderstorms in the area.",
        };
      case "snow":
        return {
          url: "https://www.weatherbit.io/static/img/icons/s01d.png",
          alt: "Snow",
          explanation: "It is snowing.",
        };
      case "mist":
        return {
          url: "https://www.weatherbit.io/static/img/icons/a01d.png",
          alt: "Mist",
          explanation: "It is misty, prepare for reduced visibility.",
        };
      case "sunny":
        return {
          url: "https://www.weatherbit.io/static/img/icons/c01d.png",
          alt: "Sunny",
          explanation: "The weather is sunny and clear.",
        };
      default:
        return {
          url: "https://img.icons8.com/?size=100&id=HvsrTtUGylxy&format=png&color=000000",
          alt: "Default Weather",
          explanation: "Weather image not available yet.",
        };
    }
  };

  useEffect(() => {
    if (initialLocation) {
      fetchWeatherByCoordinates(initialLocation);
    }
  }, [initialLocation]);

  return (
    <div className="weather-page-container">
      <form onSubmit={handleSubmit} className="weather-page-controls">
        <div className="weather-page-align">
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter City"
            required
          />
          <button type="submit">Get Info</button>
        </div>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {weatherData && (
        <div className="weather-page-main-card">
          <div>
            <h1> {weatherData.name}</h1>
            <img
              src={getWeatherImage(weatherData.weather[0].description).url}
              alt={weatherData.weather[0].description}
            />
            <p>
              {getWeatherImage(weatherData.weather[0].description).explanation}
            </p>
          </div>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}

      {forecast.length > 0 && (
        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginTop: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>6-Day Forecast:</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {Array.from(
              new Set(
                forecast.map((item) =>
                  new Date(item.dt * 1000).toLocaleDateString()
                )
              )
            ).map((date, index) => {
              const dayForecast = forecast.find(
                (item) => new Date(item.dt * 1000).toLocaleDateString() === date
              );

              return (
                <div
                  key={index}
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    width: "180px",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3>{date}</h3>
                  <div className="weather-image">
                    <img
                      src={
                        getWeatherImage(dayForecast.weather[0].description).url
                      }
                      alt={dayForecast.weather[0].description}
                    />
                  </div>
                  <p>{dayForecast?.weather[0].description}</p>
                  <p>{dayForecast?.main.temp}°C</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {attractions.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Popular Attractions</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {attractions.map((attraction, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "200px",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3>{attraction.name}</h3>
                <p>{attraction.vicinity}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
