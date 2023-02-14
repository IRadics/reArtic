import { combineReducers } from "@reduxjs/toolkit";
import artworksSlice from "./artworks/artworksSlice";

const rootReducer = combineReducers({ artworks: artworksSlice });

export default rootReducer;
