import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import imgTT from '../../asset/images/download.png'
import imgBg from '../../asset/images/vector.png'
import moment from 'moment';
import { getDataWeather, searchByLocation, setErrorSearch, setNameCity } from '../../app/weatherSlice';
import weatherApi from '../../api/weatherApi';


function LeftSidebar(props) {

    const [locationSearch, setLocationSearch] = useState('');
    const [nameLocal, setNameLocal] = useState('Hanoi');
    const [latLon, setLatLon] = useState(
        { lon: 105.8412, lat: 21.0245 }
    )
    const handleTextChange = (e) => {
        setLocationSearch(e.target.value)
    }
    const dispatch = useDispatch();
    const nameCity = useSelector(state => state.weather.nameCity);
    const data = useSelector(state => state.weather.data);
    // useEffect(() => {
    //     (
    //         async () => {
    //             try {
    //                 const { coord, name } = await weatherApi.searchLocation(nameLocal);
    //                 console.log(name)
    //                 dispatch(setNameCity(name))
    //                 setLatLon(coord)
    //             } catch (error) {
    //                 console.log()
    //                 // dispatch(setErrorSearch)
    //             }
    //         }
    //     )();
    // }, [nameLocal])

    useEffect(() => {
        (
            async () => {
                try {
                    const action = getDataWeather(nameLocal);
                    const data = await dispatch(action)
                    if (!data.error) {
                        dispatch(setNameCity(data.payload.name))
                        setLatLon(data.payload.coord)
                    }
                    console.log(data)
                } catch (error) {
                    console.log(error)
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
            <form className="form-search">
                <input type="text" value={locationSearch} className="form-control" placeholder="Search"
                    onChange={handleTextChange}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            setNameLocal(event.target.value)
                            setLocationSearch('')
                            event.preventDefault()
                        }
                    }}
                />
            </form>
            <img src={imgTT} alt="" />
            <div className="title-city">{nameCity}</div>
            <div className="title-temp">{Math.round(data[0]?.current?.temp)} °C</div>
            <div className="title-date">{moment.unix(data[0]?.current?.dt).format('dddd, h:mm a')}</div>
            <div className="title-cloud">
                {data[0]?.current?.weather[0]?.description} <br />
                {data[0]?.current?.weather[0]?.main} {`${data[0]?.current?.clouds}%`}
            </div>
            <div className="img-sidebar">
                <h4>{nameCity}</h4>
                <img src={imgBg} alt="" className="" />
            </div>
        </div>
    );
}

export default LeftSidebar;