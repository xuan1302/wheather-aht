import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { FiSun } from "react-icons/fi";
import { WiDayWindy, WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { IoMdSpeedometer } from 'react-icons/io';
import { FaThermometerEmpty } from 'react-icons/fa';

function Today(props) {
    const data = useSelector(state => state.weather.data[0]);
    return (
        <div className='row'>
            <div className="content-today">
                <div className="item">
                    <div className="item-info">
                        <div className="content">
                            <p className="item-title">UV index</p>
                            <div className="text-center">
                                <FiSun className=" icon-size icon-yellow" />
                                <p className="text-data">{data && data.current && data.current.uvi}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-info">
                        <div className="content">
                            <p className="item-title">Wind Status</p>
                            <div className="text-center">
                                <WiDayWindy className="icon-green icon-size" />
                                <p className="text-data text-center"> {((data && data.current && data.current.wind_speed) * 3.6).toFixed(2)} km/h</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-info">
                        <div className="content">
                            <p className="item-title">Sunrise & Sunset</p>
                            <p className="icon-set text-data"><WiSunrise className=" icon-size icon-yellow" /> {moment.unix(data && data.current && data.current.sunrise).format('h:mm a')} </p>
                            <p className="icon-set icon-sun text-data"><WiSunset className=" icon-size icon-yellow" />  {moment.unix(data && data.current && data.current.sunset).format('h:mm a')}</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-info">
                        <div className="content">
                            <p className="item-title">Humidity</p>
                            <div className="text-center">
                                <WiHumidity className="icon-green icon-size" />
                                <p className="text-data text-center"> {data && data.current && data.current.humidity} %</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-info">
                        <div className="content">
                            <p className="item-title">Visibility</p>
                            <div className="text-center">
                                <IoMdSpeedometer className="icon-yellow icon-size" />
                                <p className="text-data text-center">
                                    {(data && data.current && data.current.visibility) / 1000} km
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-info">
                        <div className="content">
                            <p className="fs-5 text-black-50">Pressure</p>
                            <div className="text-center">
                                <FaThermometerEmpty className="icon-green icon-size" />
                                <p className="text-data text-center">{data && data.current && data.current.pressure}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Today;