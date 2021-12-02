import styled from "styled-components";
import rainy from "../Pics/rainy.jpg";
import mountains from "../Pics/mountains.jpg";
import summer from "../Pics/summer.jpg";

export const RegularDiv = styled.div``;

export const HeaderDiv = styled(RegularDiv)`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3%;
  width: 80%;
  height: 7vh;
  border-radius: 20px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#001225" : "#75a17a"};
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
`;

export const FlexRow = styled(RegularDiv)`
  display: flex;
  flex-direction: row;
`;

export const FlexRowSpace = styled(FlexRow)`
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

export const FlexRowSpaceMax = styled(FlexRowSpace)`
  width: 53vw;
`;

export const FlexColumn = styled(RegularDiv)`
  display: flex;
  flex-direction: column;
`;
export const FlexColumnSpace = styled(FlexColumn)`
  justify-content: space-between;
`;

export const FlexCenteredColumn = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: center;
  margin-left: 2vw;
  margin-right: 2vw;
`;

export const MainWrapper = styled(RegularDiv)`
  width: 80vw;
  height: 75vh;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
`;

export const HomeDiv = styled(MainWrapper)`
  display: flex;
  opacity: ${(props) => (props.favorites ? 0.8 : 0.9)};

  position: relative;
  background-image: ${(props) => {
    if (props.favorites) return `url(${mountains})`;
    else if (props.theme === "dark") return `url(${rainy})`;
    else if (props.theme === "light") return `url(${summer})`;
  }};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow-y: auto;
`;

export const LeftHome = styled(RegularDiv)`
  flex: 2;
  display: flex;
`;

export const RightHome = styled(RegularDiv)`
  padding-top: 2vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: rgba(4, 19, 32, 0.5);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  backdrop-filter: blur(4px);
  animation: transitionInAll 1s;
`;

export const RightBottomDiv = styled(RegularDiv)`
  margin-right: 2vw;
`;

export const BottomLeftDiv = styled(FlexRow)`
  justify-content: flex-start;
  align-items: center;
  width: 50vw;
  margin-left: 2vw;
`;

export const FavoriteDiv = styled(FlexColumn)`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin: 2vw;
  width: 10vw;
  height: 20vh;
  word-break: break-all;
  animation: transitionInAll 1s, slide-in 1s;
  backdrop-filter: blur(4px);
  color: white;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: rgba(196, 197, 198, 0.24413515406162467);
    transform: scale(1.01);
  }
`;

export const FavoritsWrapper = styled.div`
  position: relative;
  flex-wrap: wrap;
  display: flex;
  margin: 3vw;
  width: 70vw;
`;

export const FiveDayCard = styled(FavoriteDiv)`
  height: 20vh;
  margin: 1.3vw;
  width: 8vw;
  justify-content: space-around;
`;

export const SearchError = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 20vh;
  line-height: 5vh;
  margin: 2vw;
  top: 200%;
  left: -150%;
  animation: none;
  color: white;
  font-weight: bold;
  font-size: 2vmin;
  font-style: italic;
  background-color: rgba(4, 19, 32, 0.7);
  transition: 0.5s ease-in-out;
  animation: transitionInAll 0.3s;
  border-radius: 15px;
`;
