import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;
export const Search = styled.TextInput`
  height: 50px;
  margin: 12px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  flex: 3;
  max-width: 700px;
`;

export const Submit = styled.TouchableOpacity`
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #002b5b;
  border-width: 1px;
  border-color: blueviolet;
  border-radius: 10px;
  flex: 1;
  padding: 10px;
  margin-right: 12px;
`;

export const TextSubmit = styled.Text`
  background-color: #002b5b;
  color: white;
`;
