// nanoid: uniq id produced by `@reduxjs/toolkit`
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { reset } from "../actions";

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        // some random id is required so each property is required separately
        id: nanoid(),
        ...action.payload,
      })
    },
    removeCar(state, action) {
      const index = state.data.findIndex((car) => car.id === action.payload);
      state.data.splice(index, 1);
    },
  },
  // extraReducers(build) {
  //   build.addCase(state, action) {
    
  //   }
  // }
});

export const { changeTerm, addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;