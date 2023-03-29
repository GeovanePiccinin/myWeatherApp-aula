import React from "react";
import { Text } from "react-native";
import {
  DateContainer,
  DayContainer,
  DegreeView,
  IconTempView,
  WeatherIcon,
  WeekDay,
  Degree,
  FeelsLike,
} from "./DailyForecast.styles";
import moment from "moment/moment";

const DailyForecast = ({ day }) => {
  return (
    <DayContainer>
      <DateContainer>
        <WeekDay>{moment(day.dt * 1000).format("ddd")}</WeekDay>
      </DateContainer>
      <IconTempView>
        <WeatherIcon
          source={{
            uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
          }}
          resizeMode={"contain"} // cover or contain its upto you view look
        />
        <Text>{day.weather[0].description}</Text>
      </IconTempView>
      <DegreeView>
        <Degree>{Math.round(day.temp.max)}°C</Degree>
        <FeelsLike>Feels {Math.round(day.feels_like.day)}°C</FeelsLike>
      </DegreeView>
    </DayContainer>
  );
};

export default DailyForecast;
