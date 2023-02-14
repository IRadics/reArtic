import { createAsyncThunk } from "@reduxjs/toolkit";
import queryArtwork, {
  QueryArtworkParams,
} from "api/artic/artwork/queryArtwork";

import {
  artworksFetchEnd,
  artworksFetchError,
  artworksFetchStart,
  artworksFetchSuccess,
} from "./artworksSlice";

export const fetchArtworks = createAsyncThunk(
  "fetchArtworks",
  async (params: QueryArtworkParams, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(artworksFetchStart);
    queryArtwork(params)
      .then((response) => {
        dispatch(artworksFetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(artworksFetchError(error));
      });
    thunkAPI.dispatch(artworksFetchEnd);
  }
);
