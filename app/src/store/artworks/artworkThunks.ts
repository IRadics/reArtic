import { createAsyncThunk } from "@reduxjs/toolkit";
import queryArtwork, {
  QueryArtworkParams,
} from "api/artic/artwork/queryArtwork";
import {
  artic_pagination_default_limit,
  artic_pagination_default_page,
} from "utils/articConstants";
import {
  assignIndexToCollection,
  isAlreadyFetched,
  isNewQuery,
} from "store/functions";
import { RootState } from "store/store";

import {
  artworksFetchEnd,
  artworksFetchError,
  artworksFetchStart,
  artworksFetchSuccess,
  artworksQueryReset,
} from "./artworksSlice";

export const fetchArtworks = createAsyncThunk(
  "fetchArtworks",
  async (params: QueryArtworkParams, { dispatch, getState }) => {
    const state = getState() as RootState;
    const prevParams = state.artworks.queryArtworkParams;
    const fetchedCollection = state.artworks.artworks;

    const page = params.params?.page || artic_pagination_default_page;
    const limit = params.params?.limit || artic_pagination_default_limit;

    let alreadyFetched = false;
    if (isNewQuery(prevParams, params)) {
      dispatch(artworksQueryReset);
    } else {
      alreadyFetched = isAlreadyFetched(fetchedCollection, page, limit);
    }
    if (alreadyFetched) return;

    dispatch(artworksFetchStart(params));
    await queryArtwork(params)
      .then((response) => {
        const indexedCollection = assignIndexToCollection(
          response.data,
          response.pagination?.offset || 0
        );
        dispatch(artworksFetchSuccess(indexedCollection));
      })
      .catch((error) => {
        dispatch(artworksFetchError(error));
      });
    dispatch(artworksFetchEnd());
  }
);
