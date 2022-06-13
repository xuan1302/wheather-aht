import axiosClient from "./axiosClient";
const API_APPID = process.env.REACT_APP_ID_WEATHER;
const weatherApi = {
    defaultWeather(lat, lon) {
        const url = `/onecall?lat=${lat}&lon=${lon}&units=metric&APPID=${API_APPID}`;
        return axiosClient.get(url)
    },
    searchLocation(data) {
        const url = `/weather?q=${data}&units=metric&APPID=${API_APPID}`;
        return axiosClient.get(url);
    },
}

export default weatherApi;