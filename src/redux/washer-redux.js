import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchInfo = createAsyncThunk(
  "washer/info",
  async function (slug, api) {
    try {
      const request = await fetch(`${process.env.REACT_APP_DOMAIN}/api/washing_machine/${slug}`);
      const data = await request.json();
      if (!data || data.detail) throw new Error("washing mashing is missed");
      return data;
    } catch (error) {
      return api.rejectWithValue(error);
    }
  }
);

const fetchStatus = createAsyncThunk(
  "washer/status",
  async function (slug, api) {
    try {
      const request = await fetch(`${process.env.REACT_APP_DOMAIN}/api/washing_machine/${slug}/status`);
      const data = await request.json();
      return data;
    } catch (error) {
      return api.rejectWithValue(error);
    }
  }
);

const fetchPayment = createAsyncThunk(
  "washer/payment",
  async function (slug, api) {
    try {
      const request = await fetch(`${process.env.REACT_APP_DOMAIN}/api/washing_machine/${slug}/payment`);
      const data = await request.json();
      return data;
    } catch (error) {
      return api.rejectWithValue(error);
    }
  }
);

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
    washer: washerSlice.reducer
  }
})

export { store, fetchInfo, fetchPayment, fetchStatus }