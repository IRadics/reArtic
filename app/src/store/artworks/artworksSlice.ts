import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Artwork } from "api/artic/artwork/types";
import { ArtworksState } from "./artworksState";

const artworksSlice = createSlice({
  initialState: {
    artworks: [],
    artworksRequestError: "",
    isFetchingArtworks: false,
  } as ArtworksState,
  name: "artworksSlice",
  reducers: {
    artworksFetchSuccess: (state, action: PayloadAction<Artwork[]>) => {
      state.artworks = action.payload;
    },
    artworksFetchError: (state, action: PayloadAction<any>) => {
      state.artworksRequestError = action.payload;
    },
    artworksFetchStart: (state) => {
      state.isFetchingArtworks = true;
      state.artworksRequestError = "";
    },
    artworksFetchEnd: (state) => {
      state.isFetchingArtworks = false;
    },
  },
});

export const {
  artworksFetchSuccess,
  artworksFetchEnd,
  artworksFetchError,
  artworksFetchStart,
} = artworksSlice.actions;

export default artworksSlice.reducer;
