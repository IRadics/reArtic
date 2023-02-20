import Button from "components/Button/Button";
import SiteTitle from "components/SiteTitle/SiteTitle";
import ThemeChanger from "components/ThemeChanger/ThemeChanger";

import { useNavigate } from "react-router-dom";

import "./SiteHeader.scss";

const SiteHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-left">
        <SiteTitle />
        <Button onClick={() => navigate("/artwork")}>artWorks</Button>
        <Button onClick={() => navigate("/artwork/favourites")}>
          favourites
        </Button>
      </div>

      <ThemeChanger />
    </div>
  );
};

export default SiteHeader;
