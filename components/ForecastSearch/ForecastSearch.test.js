import { render, screen, fireEvent } from "@testing-library/react-native";

import ForecastSearch from "./ForecastSearch";

test("checks if function is called when submit is clicked", () => {
  const mockSetCity = jest.fn();
  const mockFetchLatLonHandler = jest.fn();

  render(
    <ForecastSearch
      city="test"
      setCity={mockSetCity}
      fetchLatLonHandler={mockFetchLatLonHandler}
    />
  );

  const cityInput = screen.getByLabelText("city input");

  fireEvent.changeText(cityInput, "city1");

  fireEvent.press(screen.getByText("Submit"));

  expect(mockFetchLatLonHandler).toBeCalledTimes(1);
});
