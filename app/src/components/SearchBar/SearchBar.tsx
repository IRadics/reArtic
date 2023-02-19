import "./SearchBar.scss";
import { useState } from "react";
import { useNavigateIfNew } from "hooks/useNavigateIfNew";
import { ReactComponent as SearchIcon } from "./../../assets/icons/search.svg";

export const SearchBar = () => {
  const [value, setValue] = useState<string>();

  const navigate = useNavigateIfNew();

  const onSubmit = () => {
    if (value) navigate(`artwork/search?q=${value}`);
  };

  return (
    <form
      className={"searchBar-container"}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        placeholder="Search artworks"
        className="searchBar"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      ></input>
      <div onClick={() => onSubmit()} className="searchBar-icon">
        <SearchIcon />
      </div>
    </form>
  );
};
