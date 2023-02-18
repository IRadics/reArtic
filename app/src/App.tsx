import "./App.scss";
import "./global.scss";
import { Outlet } from "react-router-dom";
import SiteHeader from "components/SiteHeader/SiteHeader";

function App() {
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
