import Button from "components/Button/Button";
import { SearchBar } from "components/SearchBar/SearchBar";
import SiteTitle from "components/SiteTitle/SiteTitle";
import ThemeChanger from "components/ThemeChanger/ThemeChanger";
import { useNavigateIfNew } from "hooks/useNavigateIfNew";

import "./SiteHeader.scss";

const SiteHeader = () => {
  const navigate = useNavigateIfNew();

  return (
    <div className="header">
      <div className="header-left">
        <SiteTitle />
        <Button onClick={() => navigate("/")}>artWorks</Button>
        <Button>favourites</Button>
        <SearchBar></SearchBar>
      </div>

      <ThemeChanger />
    </div>
  );
};

export default SiteHeader;
