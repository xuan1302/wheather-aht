import axiosClient from "./axiosClient";
const API_APPID = process.env.REACT_APP_ID_WEATHER;
const weatherApi = {
    defaultWeather() {
        const url = `/onecall?lat=21.0245&lon=105.8412&units=metric&APPID=${API_APPID}`;
        return axiosClient.get(url)
    },
    searchLocation(data) {
        const url = `/weather?q=${data}&units=metric&APPID=${API_APPID}`;
        return axiosClient.post(url);
    },
}

export default weatherApi;