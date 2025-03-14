
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice'; // Voor zoekresultaten
import favoritesReducer from './favoritesSlice'; // Voor favorieten


export const store = configureStore({
  reducer: {
    books: booksReducer,
    favorites: favoritesReducer
  },
});
export default store;