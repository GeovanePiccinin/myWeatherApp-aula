import styled from "styled-components/native";

export const DayContainer = styled.View`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  max-width: 478px;
`;

export const DateContainer = styled.View`
  text-align: right;
  flex: 1;
`;

export const WeekDay = styled.Text`
  font-size: 24px;
  text-align: center;
  margin: 3px;
`;

export const IconTempView = styled.View`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 2;
`;

export const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const DegreeView = styled.View`
  text-align: center;
  flex: 1;
`;

export const Degree = styled.Text`
  font-size: 24px;
`;

export const FeelsLike = styled.Text`
  font-size: 14px;
`;
