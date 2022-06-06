import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherApi from "../api/weatherApi";


export const getDataWeather = createAsyncThunk('weather/getData', async (payload) => {
    //calllapi
    const data = await weatherApi.searchLocation(payload);
    //return
    return data;
});

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
        setErrorSearch(state, action) {
            state.error = 'Not found city';
        }
    },
    extraReducers: {
        [getDataWeather.fulfilled]: (state, action) => {
            state.error = '';
        },
        [getDataWeather.rejected]: (state, action) => {
            state.error = 'Not found city';
        }
    }
});

const { actions, reducer } = weatherSlice;
export const { fetchDataWeather, searchByLocation, setNameCity, setErrorSearch } = actions;
export default reducer;