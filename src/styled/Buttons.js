import styled from "styled-components";
import searchLogo from "../Pics/icons8-search.svg";
import LikedLogo from "../Pics/fillHeart.svg";
import emptyLikedLogo from "../Pics/emptyHeart.svg";

export const HeaderButton = styled.div`
  letter-spacing: -0.1em;
  font-weight: bold;
  font-size: 2vmin;
  width: ${(props) => (props.degree ? "3vw" : "7vw")};
  height: 4vh;
  cursor: pointer;
  background-image: ${(props) =>
    props.theme === "dark"
      ? "linear-gradient(to right, #0e161c 0%, #313a42 100%)"
      : "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"};
  border-top-right-radius: ${(props) => (props.left ? 0 : "15px")};
  border-bottom-right-radius: ${(props) => (props.left ? 0 : "15px")};
  border-top-left-radius: ${(props) => (props.left ? "15px" : 0)};
  border-bottom-left-radius: ${(props) => (props.left ? "15px" : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skew(-15deg);
  transition: 0.5s ease-in-out;

  &.active {
    background-image: ${(props) =>
      props.theme === "dark"
        ? "linear-gradient(to right, #243949 0%, #768ea2 100%)"
        : "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)"};
  }
  &:hover {
    transform: translate(5px, -10px);
    background-image: ${(props) =>
      props.theme === "dark"
        ? "linear-gradient(to right, #243949 0%, #768ea2 100%)"
        : "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)"};
  }
    z-index: 1;
  }

  @keyframes transitionInAll {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slide-in {
    0% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

export const SearchButton = styled.svg`
  cursor: pointer;
  background-color: #768a9d;
  border-radius: 15px;
  margin-right: 15px;
  background-image: url(${searchLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 3vmin;
  width: 4vw;
  height: 4vw;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    background-color: white;
  }
`;

export const LikedButton = styled.svg`
  background-image: ${(props) =>
    props.liked ? `url(${LikedLogo})` : `url(${emptyLikedLogo})`};
  background-position: center;
  align-self: flex-end;
  background-repeat: no-repeat;
  z-index: 1;
  cursor: pointer;
  background-size: 7vmin;
  width: 7vw;
  height: 7vw;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: translateY(-2vh);
  }
`;
