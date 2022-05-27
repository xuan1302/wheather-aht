import { createSlice } from "@reduxjs/toolkit";


const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: [],
        nameCity: 'Ha Noi',
        error: ''
    },
    reducers: {
        fetchDataWeather(state, action) {
            state.data.push(action.payload);
        },
        searchByLocation(state, action) {
            state.data = [];
            state.data.push(action.payload);
        },
        setNameCity(state, action) {
            state.nameCity = action.payload;
        },
        // setErrorSearch(state, action) {
        //     state.error = 'Lỗi';
        // }
    },
});

const { actions, reducer } = weatherSlice;
export const { fetchDataWeather, searchByLocation, setNameCity, setErrorSearch } = actions;
export default reducer;