import "./ThemeChanger.scss";
import { ReactComponent as DarkThemeIcon } from "./../../assets/icons/darkTheme.svg";
import { ReactComponent as LightThemeIcon } from "./../../assets/icons/lightTheme.svg";
import Button from "components/Button/Button";
import { getTheme, setTheme, Theme } from "utils/theme";
import { useState } from "react";

const ThemeChanger = () => {
  const [siteTheme, setThemeState] = useState(getTheme());
  const setSiteTheme = (theme: Theme) => {
    setThemeState(theme);
    setTheme(theme);
  };

  return (
    <Button
      className="themeChanger"
      onClick={() => setSiteTheme(siteTheme === "light" ? "dark" : "light")}
    >
      {siteTheme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  );
};

export default ThemeChanger;
