import { QueryArtworkParams } from "api/artic/artwork/queryArtwork";
import { useEffect, useState } from "react";
import {
  artic_pagination_default_limit,
  artic_pagination_default_page,
} from "utils/articConstants";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchArtworks } from "../../store/artworks/artworkThunks";

export default function useArtworksQuery(queryParams: QueryArtworkParams) {
  const dispatch = useAppDispatch();
  const artworksStore = useAppSelector((state) => state.artworks);
  const page = queryParams.params?.page || artic_pagination_default_page;
  const limit = queryParams.params?.limit || artic_pagination_default_limit;

  const { artworks, isFetchingArtworks, artworksRequestError } = artworksStore;

  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(isFetchingArtworks);
  }, [isFetchingArtworks]);

  useEffect(() => {
    dispatch(fetchArtworks(queryParams));
    //disabling eslint as only the params (stringified so free of reference change) needed
    //eslint-disable-next-line
  }, [JSON.stringify(queryParams)]);

  const from = (page - 1) * limit;
  const to = page * limit - 1;

  const artworksOnPage = artworks.filter((aw) => {
    return aw.storeIndex >= from && aw.storeIndex <= to;
  });

  return {
    collection: artworksOnPage,
    isLoading: isloading,
    error: artworksRequestError,
  };
}
