import { configureStore, createSlice } from "@reduxjs/toolkit";

import { fetchInfo, fetchPayment, fetchStatus } from "./washer-redux.async";
import { allWashersSlice } from "./all-launders";



const washerSlice = createSlice({
  name: "washer",
  initialState: {
    info: {},
    payment: {},
    status: {},
    isLoading: true,
    isError: false
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchInfo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    })

    builder.addCase(fetchInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.info = action.payload;
    })

    builder.addCase(fetchInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.info = action.payload;
    })

    // ----------------

    builder.addCase(fetchPayment.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    })

    builder.addCase(fetchPayment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.payment = action.payload;
    })

    builder.addCase(fetchPayment.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    })

    // ----------------

    builder.addCase(fetchStatus.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    })

    builder.addCase(fetchStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.status = action.payload?.status;
    })

    builder.addCase(fetchStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    })
  }
})

const store = configureStore({
  reducer: {
    washer: washerSlice.reducer,
    allLaunders: allWashersSlice.reducer
  }
})

export { store }