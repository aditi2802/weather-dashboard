import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar.jsx';
import WeatherCard from './WeatherCard.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import './App.css';

function App() {
  const [city, setCity] = useState(localStorage.getItem('lastCity'));
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if(city){
      fetchWeather(city);
    }
  }, []);
  
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(false);
    try{
      const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=YOUR_API_KEY');
          if(!response.ok) throw new Error('City not found');
          const data = await response.json();
          setWeatherData(data);
          setCity(cityName);
          localStorage.setItem('lastCity', cityName);
    }
    catch(err){
      setError(err.message);
      setWeatherData(null);
    }
  };
  
  const handleSearch = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
  }
  
  return (
    <div class="app">
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchBar onSearch={handleSearch} />
      {loading && <p>...Loading</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData}/>}
    </div>
  )
}

export default App;
