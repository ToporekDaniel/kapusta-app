import { configureStore, createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    inputDisabled: false
  },
  reducers: {
    disableInput(state) {
      state.inputDisabled = true;
    }
  }
});

export const { disableInput } = balanceSlice.actions;

const store = configureStore({
  reducer: {
    balance: balanceSlice.reducer
  }
});

export default store;
