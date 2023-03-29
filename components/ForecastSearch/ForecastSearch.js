import React from "react";
import { Search, Container, Submit, TextSubmit } from "./ForecastSearch.styles";
import { Keyboard } from "react-native";

const ForecastSearch = ({ city, setCity, fetchLatLonHandler }) => {
  const handleSubmit = (e) => {
    fetchLatLonHandler();
    Keyboard.dismiss();
  };

  return (
    <Container>
      <Search
        accessibilityLabel="city input"
        onChangeText={setCity}
        value={city}
        onSubmitEditing={handleSubmit}
        placeholder="Search by City"
      />
      <Submit onPress={handleSubmit}>
        <TextSubmit>Submit</TextSubmit>
      </Submit>
    </Container>
  );
};

export default ForecastSearch;
