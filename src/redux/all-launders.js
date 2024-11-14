import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchAllLaunders = createAsyncThunk("all/fetch", async (slug, api) => {
  try {
    const req = await fetch(`https://666458a8932baf9032aac87b.mockapi.io/launders`);
    // const req = await fetch(`${process.env.REACT_APP_DOMAIN_TEST}/api/locations/${slug}/washing_machines`);

    const data = await req.json();

    return data[0];
    // return data;
  } catch (error) {
    return api.rejectWithValue("Error")
  }
})



const allWashersSlice = createSlice({
  name: "all",
  initialState: {
    isLoading: true,
    isError: false,
    data: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllLaunders.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.data = [];
    })

    builder.addCase(fetchAllLaunders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    })

    builder.addCase(fetchAllLaunders.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.data = [];
    })
  }
})

export { allWashersSlice, fetchAllLaunders }