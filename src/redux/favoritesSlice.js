import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  favoriteBooks: [], // Dit is de lijst van favoriete boeken
};

// slice voor favorieten
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // Controleer of het boek al in de favorieten zit
      const bookExists = state.favoriteBooks.some(book => book.key === action.payload.key);
      if (!bookExists) {
        state.favoriteBooks.push(action.payload); // Voeg het boek toe als het nog niet bestaat
      }
    },
    removeFavorite: (state, action) => {
      // Verwijder het boek uit de favorieten op basis van de 'key'
      state.favoriteBooks = state.favoriteBooks.filter(
        (book) => book.key !== action.payload // Verwijder het boek uit de favorieten
      );
    },
  },
});


export const { addFavorite, removeFavorite } = favoritesSlice.actions;


export default favoritesSlice.reducer;