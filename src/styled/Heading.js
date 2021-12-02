import styled from "styled-components";

export const HeaderFont = styled.h2`
  color: #768ea2;
  font-size: 4vmin;
  letter-spacing: -0.1em;
  font-weight: bold;
  transition: 1s ease-in-out;
  &:hover {
    color: white;
    transform: scale(1.1);
  }
  cursor: pointer;
  text-shadow: 2px 2px 2px #000000;
`;

export const CityHeading = styled(HeaderFont)`
  width: fit-content;
  letter-spacing: normal;
  margin-left: 4vw;
  margin-top: 3vh;
  color: #d5d5d5;
  transition: 0.3s;
  font-size: 2vmin;
  font-weight: 400;
  animation: transitionInAll 2s, slide-in 1s;
`;

export const RightCurrentWeatherHeading = styled(CityHeading)`
  cursor: auto;
  margin-top: 1vh;
  margin-bottom: 0;
  color: white;
  font-size: 3vmin;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const WeatherHeading = styled(CityHeading)`
  cursor: auto;
  &:hover {
    transform: none;
  }
`;

export const WeeklyListHeading = styled(WeatherHeading)`
  font-size: medium;
  width: ${(props) => (props.day ? "2vw" : "8vw")};
  height: 3.5vh;
  margin-top: 1vh;
  margin-bottom: 10px;
  margin-left: ${(props) => (props.day ? "10px" : "0")};
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const UpperLeftHeading = styled(CityHeading)`
  animation: none;
  color: white;
  font-weight: bold;
  font-size: 2vmin;
  font-style: italic;
`;

export const AddHeading = styled(UpperLeftHeading)`
  z-index: 10;
  margin: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  top: 40vh;
  left: 30vw;
  width: 15vw;
  height: 15vh;
  background-color: rgba(4, 19, 32, 0.7);
  transition: 0.5s ease-in-out;
  animation: transitionInAll 0.3s;
`;

export const ErrorDiv = styled(AddHeading)`
  width: 25vw;
  height: 20vh;
  line-height: 5vh;
  margin: 2vw;
`;

export const DateHeading = styled(UpperLeftHeading)`
  text-shadow: 2px 2px 2px #000000;
  margin: 0;
  cursor: auto;
  animation: none;
  &:hover {
    transform: none;
  }
`;

export const BigTemperature = styled.h1`
  text-shadow: 2px 2px 2px #000000;
  color: white;
  font-weight: bold;
  font-size: 10vmin;
`;

export const BigCity = styled(BigTemperature)`
  font-size: 7vmin;
  margin: 0;
`;

export const FavoritsHeading = styled.h1`
  font-size: 5vmin;
  letter-spacing: -0.05em;
  color: white;
  text-shadow: 2px 2px 2px #000000;
  align-self: center;
  margin-bottom: 0;
  animation: transitionInAll 1s;
`;
