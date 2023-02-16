import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//type to add storeIndex property in order to properly paginate the data in the store
export type IndexedCollectionItem<T> = T & {
  storeIndex: number;
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
