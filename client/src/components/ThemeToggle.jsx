import Wrapper from "../assets/wrappers/ThemeToggle";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useDashboardContext } from "../pages/DashboardLayout";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? <BsSunFill className="toggle-icon" /> : <BsMoonFill />}
    </Wrapper>
  );
};

export default ThemeToggle;
