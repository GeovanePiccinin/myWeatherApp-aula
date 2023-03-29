import { render, screen, fireEvent } from "@testing-library/react-native";
import { weatherMockData } from "../../weather_data";

import DailyForecast from "./DailyForecast";
import moment from "moment/moment";

test("should day correctly", () => {
  const day = weatherMockData.daily[0];

  render(<DailyForecast day={day} />);

  screen.getByText(moment(day.dt * 1000).format("ddd"));
});

test("should description correctly", () => {
  const day = weatherMockData.daily[0];

  render(<DailyForecast day={day} />);

  screen.getByText(day.weather[0].description);
});
