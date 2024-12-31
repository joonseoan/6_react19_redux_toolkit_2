import { configureStore } from "@reduxjs/toolkit";
import formReducer, { changeName, changeCost } from './slices/formSlice';
import carsReducer, { changeTerm, addCar, removeCar } from './slices/carsSlice';
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export {
  store,
  changeName,
  changeCost,
  changeTerm,
  addCar,
  removeCar,
  reset,
};
