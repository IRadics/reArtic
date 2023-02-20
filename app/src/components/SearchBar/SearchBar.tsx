import "./SearchBar.scss";
import { useState } from "react";
import { ReactComponent as SearchIcon } from "./../../assets/icons/search.svg";

interface SearchBarProps {
  className?: string;
  onSubmit: (searchTerm: string) => void;
}

export const SearchBar = ({ className, onSubmit }: SearchBarProps) => {
  const [value, setValue] = useState<string>();

  const handleSubmit = () => {
    if (value) {
      onSubmit(value);
    }
  };

  return (
    <form
      className={`searchBar-container ${className ? className : ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        placeholder="Search artworks"
        className="searchBar"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      ></input>
      <div onClick={handleSubmit} className="searchBar-icon">
        <SearchIcon />
      </div>
    </form>
  );
};
