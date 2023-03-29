import React, { useState, useEffect } from "react";

import { ImageBackground, FlatList, Text } from "react-native";
import {
  Container,
  NoWeather,
  FutureForecastContainer,
} from "./WeatherMain.styles";
import bgImg from "../assets/4.png";
import ForecastSearch from "../components/ForecastSearch/ForecastSearch";
import CurrentForecast from "../components/CurrentForecast/CurrentForecast";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import config from "../config";
import { weatherMockData } from "../weather_data";

const WeatherMain = () => {
  const [city, setCity] = useState("Belo Horizonte");
  const [lat, setLat] = useState(-19.912998);
  const [lon, setLon] = useState(-43.940933);
  const [country, setCountry] = useState("BR");
  const [weather, setWeather] = useState({});

  const fetchLatLonHandler = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", JSON.stringify(data));

        setCountry(data.sys.country);
        setLat(data.coord.lat);
        setLon(data.coord.lon);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    console.log(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
    );

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${config.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [lat, lon]);

  return (
    <Container>
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <ForecastSearch
          city={city}
          setCity={setCity}
          fetchLatLonHandler={fetchLatLonHandler}
        />
        <Text>"BH"</Text>
        {weather.current ? (
          <CurrentForecast
            currentWeather={weather}
            timezone={weather.timezone}
            country={country}
            city={city}
          />
        ) : (
          <NoWeather>
            No information found for this search. Try a new Location.
          </NoWeather>
        )}
        {weather.daily ? (
          <FlatList
            data={weather.daily}
            renderItem={({ item }) => {
              return <DailyForecast day={item} />;
            }}
            keyExtractor={(item) => item.dt}
          />
        ) : (
          <NoWeather>No daily information found for this search.</NoWeather>
        )}
      </ImageBackground>
    </Container>
  );
};

export default WeatherMain;
