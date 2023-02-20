import Button from "components/Button/Button";
import { ReactComponent as BookMarkIcon } from "./../../assets/icons/bookmark.svg";
import { ButtonFavouriteProps } from "./ButtonFavourite";
import "./ButtonFavourite.scss";

const ButtonFavouriteWithText = ({
  enabled = false,
  className,
  onClick,
}: ButtonFavouriteProps) => {
  return (
    <Button className="buttonFavouriteWithText" onClick={onClick}>
      <div
        className={`buttonFavourite ${enabled ? "enabled" : ""} ${
          className ? className : ""
        }`}
      >
        <BookMarkIcon />
      </div>
      {enabled ? "Remove from Favourites" : "Add to Favourites"}
    </Button>
  );
};

export default ButtonFavouriteWithText;
