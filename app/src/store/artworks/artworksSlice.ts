import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { QueryArtworkParams } from "api/artic/artwork/queryArtwork";
import { Artwork } from "api/artic/artwork/types";
import { unionWith } from "lodash";
import { IndexedCollectionItem } from "store/store";
import { ArtworksState } from "./artworksState";

const artworksSlice = createSlice({
  initialState: {
    artworks: [],
    artworksRequestError: "",
    isFetchingArtworks: false,
    queryArtworkParams: {},
  } as ArtworksState,
  name: "artworksSlice",
  reducers: {
    artworksQueryReset: (state) => {
      state.artworks = [];
    },

    artworksFetchSuccess: (
      state,
      action: PayloadAction<IndexedCollectionItem<Artwork>[]>
    ) => {
      state.artworks = unionWith(
        state.artworks,
        action.payload,
        (stateAw, payloadAw) => {
          return stateAw.id === payloadAw.id;
        }
      ).sort((a, b) => a.storeIndex - b.storeIndex);
    },
    artworksFetchError: (state, action: PayloadAction<any>) => {
      state.artworksRequestError = action.payload;
    },
    artworksFetchStart: (state, action: PayloadAction<QueryArtworkParams>) => {
      state.isFetchingArtworks = true;
      state.artworksRequestError = "";
      state.queryArtworkParams = action.payload;
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
  artworksQueryReset,
} = artworksSlice.actions;

export default artworksSlice.reducer;
