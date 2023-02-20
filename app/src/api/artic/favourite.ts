export type FavouriteType = "artworks";

const delimiter = ",";

export const setFavourite = (id: number, type: FavouriteType) => {
  const localStorageKey = `reartic_fav_${type}`;

  const favourites = getFavourites(type);

  favourites.push(id);

  localStorage.setItem(localStorageKey, favourites.join(delimiter));
};

export const removeFavourite = (id: number, type: FavouriteType) => {
  const localStorageKey = `reartic_fav_${type}`;
  let favourites = getFavourites(type);

  favourites = favourites.filter((favId) => favId !== id);

  localStorage.setItem(localStorageKey, favourites.join(delimiter));
};

export const getFavourites = (type: FavouriteType) => {
  const localStorageKey = `reartic_fav_${type}`;
  return (
    localStorage
      .getItem(localStorageKey)
      ?.split(delimiter)
      .map((id) => parseInt(id)) || []
  );
};

export const isFavourite = (id: number, type: FavouriteType) => {
  const favourites = getFavourites(type);
  return favourites.includes(id);
};
