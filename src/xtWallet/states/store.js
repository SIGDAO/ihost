import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import { walletSlice } from "../states/walletState";


const rootReducer = combineReducers({
  wallet: walletSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
});


