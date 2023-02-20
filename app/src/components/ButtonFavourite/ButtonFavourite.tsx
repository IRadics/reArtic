import { ReactComponent as BookMarkIcon } from "./../../assets/icons/bookmark.svg";
import "./ButtonFavourite.scss";

export interface ButtonFavouriteProps {
  enabled: boolean;
  className?: string;
  onClick?: () => void;
}

const ButtonFavourite = ({
  enabled = false,
  className,
  onClick,
}: ButtonFavouriteProps) => {
  return (
    <button
      onClick={onClick}
      className={`buttonFavourite ${enabled ? "enabled" : ""} ${
        className ? className : ""
      }`}
    >
      <BookMarkIcon />
    </button>
  );
};

export default ButtonFavourite;
