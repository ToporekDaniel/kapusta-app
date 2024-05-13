import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    type: 'day',
  },
  reducers: {
    toggle(state, { payload }) {
      state.type = payload;
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
