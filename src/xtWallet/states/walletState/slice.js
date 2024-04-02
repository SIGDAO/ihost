import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
  walletNodeHost: '',
  walletPublicKey: '',
  isWalletConnected: false,
  walletError: undefined,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletNodeHost: (state, action) => {
      state.walletNodeHost = action.payload;
    },
    setIsWalletConnected: (state, action) => {
      state.isWalletConnected = action.payload;
    },
    setWalletPublicKey: (state, action) => {
      state.walletPublicKey = action.payload;
    },
    setWalletError: (state, action) => {
      state.walletError = action.payload;
    },
  },
});

export const { actions } = walletSlice;
