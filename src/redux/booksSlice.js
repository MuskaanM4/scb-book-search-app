
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  loading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload; 
    },
    setLoading: (state, action) => {
      state.loading = action.payload; 
    },
  },
});

export const { setBooks, setLoading } = booksSlice.actions;
export default booksSlice.reducer;