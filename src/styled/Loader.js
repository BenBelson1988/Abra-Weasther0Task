import styled from "styled-components";
import loader from "../Pics/Loader/transLoader.svg";

export const Loader = styled.div`
  position: absolute;
  top: 30%;
  left: 25%;
  background: url(${loader});
  background-position: center;
  width: 200px;
  height: 200px;
  opacity: 1;
  z-index: 20;
  background-repeat: no-repeat;
`;
