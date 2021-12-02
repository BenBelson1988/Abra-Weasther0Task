import { HeaderButton } from "../styled/Buttons";
import { FlexRow, HeaderDiv } from "../styled/Divs";
import { HeaderFont } from "../styled/Heading";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeDegree, changeTheme } from "../stores/commonSlicer";

export default () => {
  const dispatch = useDispatch();
  const degree = useSelector(({ common }) => {
    return common.degrees || [];
  });
  const theme = useSelector(({ common }) => {
    return common.theme || [];
  });
  const location = useLocation();
  const currentTab = location.pathname.substring(1);
  const history = useHistory();
  return (
    <HeaderDiv theme={theme}>
      <FlexRow>
        <HeaderFont>Abra Weather Task</HeaderFont>
      </FlexRow>
      <FlexRow>
        <HeaderButton
          theme={theme}
          className={theme === "dark" ? "active" : ""}
          left
          degree
          onClick={() => {
            dispatch(changeTheme("dark"));
          }}
        >
          Dark
        </HeaderButton>
        <HeaderButton
          theme={theme}
          className={theme === "light" ? "active" : ""}
          degree
          onClick={() => {
            dispatch(changeTheme("light"));
          }}
        >
          Light
        </HeaderButton>
      </FlexRow>
      <FlexRow>
        <HeaderButton
          theme={theme}
          className={degree === "F" ? "active" : ""}
          left
          degree
          onClick={() => {
            dispatch(changeDegree("F"));
          }}
        >
          F
        </HeaderButton>
        <HeaderButton
          theme={theme}
          className={degree === "C" ? "active" : ""}
          degree
          onClick={() => {
            dispatch(changeDegree("C"));
          }}
        >
          C
        </HeaderButton>
      </FlexRow>
      <FlexRow>
        <HeaderButton
          theme={theme}
          className={currentTab === "home" ? "active" : ""}
          left
          onClick={() => history.push("/home")}
        >
          Home
        </HeaderButton>
        <HeaderButton
          theme={theme}
          className={currentTab === "favorits" ? "active" : ""}
          onClick={() => history.push("/favorits")}
        >
          Favorits
        </HeaderButton>
      </FlexRow>
    </HeaderDiv>
  );
};
