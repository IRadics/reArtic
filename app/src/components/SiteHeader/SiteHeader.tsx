import Button from "components/Button/Button";
import { SearchBar } from "components/SearchBar/SearchBar";
import SiteTitle from "components/SiteTitle/SiteTitle";
import ThemeChanger from "components/ThemeChanger/ThemeChanger";
import "./SiteHeader.scss";

const SiteHeader = () => {
  return (
    <div className="header">
      <div className="header-left">
        <SiteTitle />
        <Button>artWorks</Button>
        <Button>favourites</Button>
        <SearchBar></SearchBar>
      </div>

      <ThemeChanger />
    </div>
  );
};

export default SiteHeader;
