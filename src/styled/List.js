import styled from "styled-components";

export const AutoCompleteList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 15vw;
  margin-left: 4vw;
  border-radius: 15px;
  max-height: 25vh;
  overflow-y: auto;
`;

export const ListItem = styled.div`
  padding-left: 1vw;
  z-index: 10;
  line-height: 4vh;
  font-weight: bold;
  cursor: pointer;
  background-color: black;
  color: white;

  &:hover {
    background-color: #768a9d;
  }
`;
