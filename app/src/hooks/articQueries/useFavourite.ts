import {
  FavouriteType,
  isFavourite,
  removeFavourite,
  setFavourite,
} from "api/artic/favourite";
import { useState } from "react";

const useFavourite = (type: FavouriteType, id: number) => {
  const [isFavourited, setIsFavourited] = useState<boolean>(
    isFavourite(id, type)
  );
  const _setFavourite = () => {
    setFavourite(id, type);
    setIsFavourited(true);
  };

  const _removeFavourite = () => {
    removeFavourite(id, type);
    setIsFavourited(false);
  };

  const toggleFavourite = () => {
    if (isFavourited) {
      _removeFavourite();
    } else {
      _setFavourite();
    }
  };

  return {
    isFavourite: isFavourited,
    setFavourite: _setFavourite,
    removeFavourite: _removeFavourite,
    toggleFavourite,
  };
};

export default useFavourite;
