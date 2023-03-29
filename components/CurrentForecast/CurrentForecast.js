import {
  CurrentView,
  CurrentTempView,
  MainInforContainer,
  Description,
  TextDescription,
  CurrentDegrees,
  SecondaryInfoContainer,
  DetailBox,
  Label,
  Details,
  Row,
  WeatherIcon,
} from "./CurrentForecast.styles";

const CurrentForecast = ({ currentWeather, country, timezone, city }) => {
  return (
    <CurrentView>
      <TextDescription>{`City: ${city} / Country: ${country}`}</TextDescription>
      <TextDescription>Time Zone: {timezone}</TextDescription>
      <MainInforContainer>
        <CurrentTempView>
          {currentWeather.current && (
            <WeatherIcon
              source={{
                uri: `http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon}@2x.png`,
              }}
              resizeMode={"contain"}
            />
          )}
          <CurrentDegrees>
            {Math.round(currentWeather.current && currentWeather.current.temp)}
            °C
          </CurrentDegrees>
        </CurrentTempView>
        <Description>
          {currentWeather.current &&
            currentWeather.current.weather[0].description}
        </Description>
      </MainInforContainer>
      <SecondaryInfoContainer>
        <Row>
          <DetailBox>
            <Label>Feels</Label>
            <Details>
              {currentWeather.current &&
                Math.round(currentWeather.current.feels_like)}
              °C
            </Details>
          </DetailBox>
          <DetailBox>
            <Label>Low</Label>
            <Details>
              {currentWeather.daily &&
                Math.round(currentWeather.daily[0].temp.min)}
              °C
            </Details>
          </DetailBox>
          <DetailBox>
            <Label>High</Label>
            <Details>
              {currentWeather.daily &&
                Math.round(currentWeather.daily[0].temp.max)}
              °C
            </Details>
          </DetailBox>
        </Row>
        <Row>
          <DetailBox>
            <Label>Wind</Label>
            <Details>
              {currentWeather.current && currentWeather.current.wind_speed} m/s
            </Details>
          </DetailBox>
          <DetailBox>
            <Label>Humidity</Label>
            <Details>
              {currentWeather.current && currentWeather.current.humidity}%
            </Details>
          </DetailBox>
          <DetailBox>
            <Label>Rain</Label>
            <Details>
              {currentWeather.daily > 0 ? currentWeather.daily[0].rain : "0"} MM
            </Details>
          </DetailBox>
        </Row>
      </SecondaryInfoContainer>
    </CurrentView>
  );
};

export default CurrentForecast;
