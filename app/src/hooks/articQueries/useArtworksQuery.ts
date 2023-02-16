import { QueryArtworkParams } from "api/artic/artwork/queryArtwork";
import { useEffect } from "react";
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

  useEffect(() => {
    dispatch(fetchArtworks(queryParams));
    //disabling eslint as only the params (stringified so free of reference change) needed
    //eslint-disable-next-line
  }, [JSON.stringify(queryParams)]);

  const { artworks, isFetchingArtworks, artworksRequestError } = artworksStore;
  const artworksOnPage = artworks.slice((page - 1) * limit, page * limit);

  return {
    collection: artworksOnPage,
    isLoading: isFetchingArtworks,
    error: artworksRequestError,
  };
}
