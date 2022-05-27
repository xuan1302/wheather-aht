import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import imgTT from '../../asset/images/download.png'
import imgBg from '../../asset/images/vector.png'
import moment from 'moment';
import { searchByLocation, setErrorSearch, setNameCity } from '../../app/weatherSlice';
import weatherApi from '../../api/weatherApi';
// const API_APPID = process.env.REACT_APP_ID_WEATHER;

function LeftSidebar(props) {

    const [locationSearch, setLocationSearch] = useState('');
    const [nameLocal, setNameLocal] = useState('Ha Noi');
    const [latLon, setLatLon] = useState(
        { lon: 105.8412, lat: 21.0245 }
    )
    const handleTextChange = (e) => {
        setLocationSearch(e.target.value)
    }
    const dispatch = useDispatch();
    const nameCity = useSelector(state => state.weather.nameCity);
    const data = useSelector(state => state.weather.data);
    // const handleGetLatLon = (value) => {
    //     fetch(`https://api.openweathermap.org/data/2.5//weather?q=${value}&units=metric&APPID=${API_APPID}`)
    //         .then(response => response.json())
    //         .then(item => setLatLon(item.coord));
    // }
    useEffect(() => {
        (
            async () => {
                try {
                    const { coord } = await weatherApi.searchLocation(nameLocal);
                    console.log(coord)
                    setLatLon(coord)
                } catch (error) {
                    console.log()
                    // dispatch(setErrorSearch)
                }
            }
        )();
    }, [nameLocal])

    useEffect(() => {
        (
            async () => {
                try {
                    const dataSearch = await weatherApi.defaultWeather(latLon.lat, latLon.lon);
                    dispatch(searchByLocation(dataSearch))
                } catch (error) {
                    console.log()
                }
            }
        )();
    }, [latLon])
    return (
        <div className='wrap'>
            <form className="mb-3">
                <input type="text" value={locationSearch} className="form-control" placeholder="Search" data-toggle="tooltip" data-placement="top" title="Press city name then Enter" autoFocus
                    onChange={handleTextChange}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            // handleGetLatLon(locationSearch)
                            dispatch(setNameCity(locationSearch))
                            setNameLocal(event.target.value)
                            setLocationSearch('')
                            event.preventDefault()
                        }
                    }}
                />
            </form>
            <img src={imgTT} alt="" />
            <div className="fs-2 fw-bold lh-sm text-dack">{nameCity}</div>
            <div className="fs-1 fw-bold">{Math.round(data[0]?.current?.temp)} *C</div>
            <div className="fs-5 lh-lg">{moment.unix(data[0]?.current?.dt).format('dddd, h:mm a')}</div>
            <div className="fs-6 lh-base text-capitalize text-muted mb-3">
                {data[0]?.current?.weather[0]?.description} <br />
                {data[0]?.current?.weather[0]?.main} {`${data[0]?.current?.clouds}%`}
            </div>
            <div className="position-relative d-flex justify-content-center align-items-center">
                <div className="position-absolute">
                    <div className="fs-3 fw-bold text-white">{nameCity}</div>
                </div>
                <img src={imgBg} alt="" className="img-fluid rounded " />
            </div>
        </div>
    );
}

export default LeftSidebar;