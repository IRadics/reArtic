import "./App.scss";
import "./global.scss";
import "./variables.scss";
import { Outlet } from "react-router-dom";
import SiteHeader from "components/SiteHeader/SiteHeader";
import { getTheme } from "utils/theme";

function App() {
  //initial theme setup
  const theme = getTheme();
  document.documentElement.setAttribute("data-theme", theme);
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
