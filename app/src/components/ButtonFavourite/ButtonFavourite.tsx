import { ReactComponent as BookMarkIcon } from "./../../assets/icons/bookmark.svg";
import "./ButtonFavourite.scss";

interface ButtonFavouriteProps {
  enabled: boolean;
  className?: string;
}

const ButtonFavourite = ({
  enabled = false,
  className,
}: ButtonFavouriteProps) => {
  return (
    <button
      className={`buttonFavourite ${enabled ? "enabled" : ""} ${
        className ? className : ""
      }`}
    >
      <BookMarkIcon />
    </button>
  );
};

export default ButtonFavourite;
