import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(build) {
    build.addCase(reset, (state, action) => {
      state.name = '';
      state.cost = 0;
      
      // It works
      // return {
      //   name: '',
      //   cost: 0,
      // }
    })
  }
});

export const { changeName, changeCost } = formSlice.actions;
export default formSlice.reducer;