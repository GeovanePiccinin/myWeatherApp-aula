import { render, screen, fireEvent } from "@testing-library/react-native";
import WeatherMain from "./WeatherMain";
import { weatherMockData } from "../weather_data";
import { act } from "react-test-renderer";

beforeEach(() => {
  fetch.resetMocks();
});

test("returns result if array", () => {
  fetch.mockResponseOnce(JSON.stringify([{ id: 1 }]));
});
