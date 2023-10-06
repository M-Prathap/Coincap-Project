import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cryptoCoins: [],
  error: "",
  isLoading: false,
};

// fetch Crypto Coins
export const fetchCryptoCoins = createAsyncThunk(
  "cryptoCoins",
  async (page) => {
    try {
      const responce = await axios.get(
        `https://api.coincap.io/v2/assets/?limit=${page * 50}`
      );
      const data = { data: responce.data.data };
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const cryptoSlice = createSlice({
  name: "cryptoCoins",
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(fetchCryptoCoins.pending, (state) => {
      state.error = "";
      state.isLoading = true;
    });
    bulider.addCase(fetchCryptoCoins.fulfilled, (state, action) => {
      state.cryptoCoins = action.payload.data;
      state.isLoading = false;
    });
    bulider.addCase(fetchCryptoCoins.rejected, (state, action) => {
      state.error = "something went wrong!!";
    });
  },
});

export const { reducer: cryptoCoinsReducer } = cryptoSlice;
