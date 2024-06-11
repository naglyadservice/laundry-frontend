import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchInfo = createAsyncThunk(
  "washer/info",
  async function (slug, api) {
    try {
      const request = await fetch(`https://wash.npc.com.ua/api/waher/${slug}/info`);
      const data = await request.json();

      if (request.status == 404) {
        console.log("%c404 error while receiving INFO", "color:white; background:red");
        throw new Error("data.status = 404");
      }

      console.log("%cINFO received succesfully", "color:white; background:green");

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
      const request = await fetch(`https://wash.npc.com.ua/api/waher/${slug}/pay`);
      const data = await request.json();

      if (request.status == 404) {
        console.log("%c404 error while receiving PAYMENT", "color:white; background:red");
        throw new Error("data.status = 404");
      }

      console.log("%cPAYMENT received succesfully", "color:white; background:green");

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
      state.payment = action.payload;
    })
  }
})

const store = configureStore({
  reducer: {
    washer: washerSlice.reducer
  }
})

export { store, fetchInfo, fetchPayment }