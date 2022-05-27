import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from './weatherSlice';
const rootReducer = {
    weather: weatherSlice
}
const store = configureStore({
    reducer: rootReducer,
})
export default store;