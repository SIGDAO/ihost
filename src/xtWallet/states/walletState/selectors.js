
export const selectWalletState = (state) => state.wallet;

export const selectIsWalletConnected = (state) =>
  state.wallet.isWalletConnected;

export const selectWalletNodeHost = (state) =>
  state.wallet.walletNodeHost;

export const selectWalletPublicKey = (state) =>
  state.wallet.walletPublicKey;

export const selectWalletError = (state) =>
  state.wallet.walletPublicKey;
