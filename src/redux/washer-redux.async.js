import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInfo = createAsyncThunk(
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

export const fetchStatus = createAsyncThunk(
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

export const fetchPayment = createAsyncThunk(
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
