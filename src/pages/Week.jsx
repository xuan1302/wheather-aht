import React from 'react';
import { useSelector } from 'react-redux'
import { useState } from 'react';
import moment from 'moment';
import classnames from 'classnames';

function Week(props) {

    const dataWeather = useSelector(state => state.weather.data[0].daily);
    console.log(dataWeather)
    const [itemWeek, setItemWeek] = useState(dataWeather && dataWeather[0]);
    console.log(itemWeek)

    const handleClick = (dataWeek, index) => {
        setItemWeek(dataWeek);
    }

    return (
        <>
            <div className="row">
                <div className="list-item-week">
                    {
                        dataWeather.length > 0 && (
                            dataWeather.map((dataWeek, index) =>
                                <div key={index} className="item " onClick={() => handleClick(dataWeek, index)}>
                                    {/* <div className={`${timeEl.dt === item.dt ? 'bg-info' : 'bg-white'} item-info`}> */}
                                    <div className={classnames({
                                        'item-info': true,
                                        'active': dataWeek.dt === itemWeek.dt
                                    })}>
                                        <div className="content">
                                            <p className="date-time">{moment.unix(dataWeek.dt).format('ddd, DD/MM')}</p>
                                            <div className="text-center">
                                                <img src={`https://openweathermap.org/img/w/${dataWeek.weather[0]?.icon}.png`} alt="" />
                                                <p className="item-d">{Math.round(dataWeek.temp.min)}° - {Math.round(dataWeek.temp.max)}°</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
                <div className="item-detail">
                    <div className="content-item-detail">
                        <p className="detail-date">{moment.unix(itemWeek.dt).format('ddd, DD/MM')}</p>
                        <div className="content-item">
                            <div className="item">
                                <p className="item-text">Temp current : {Math.round(itemWeek && itemWeek.temp.day)} °C</p>
                                <p className="item-text">Temp :  {itemWeek && itemWeek.temp && itemWeek.temp.min} °C - {itemWeek && itemWeek.temp && itemWeek.temp.max} - °C</p>
                                <p className="item-text">Humidity : {itemWeek && itemWeek.humidity}  %</p>
                                <p className="item-text">Wind speed : {itemWeek && itemWeek.wind_speed} km/h</p>
                            </div>
                            <div className="item">
                                <p className="item-text">Sunrise : {moment.unix(itemWeek && itemWeek.sunrise).format('h:mm a')} </p>
                                <p className="item-text">Sunset :  {moment.unix(itemWeek && itemWeek.sunset).format('h:mm a')} </p>
                                <p className="item-text">Description : {itemWeek && itemWeek.weather[0] && itemWeek.weather[0].description} </p>
                                <p className="item-text">Atmospheric pressure : {itemWeek && itemWeek.pressure} hPa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Week;