import React, { useEffect, useState } from 'react';
import Menu from '../components/mainMenu/Menu';
import Today from './Today';
import Week from './Week';
import Hour from './Hour';
import LeftSidebar from '../components/leftSidebar/LeftSidebar';
import weatherApi from '../api/weatherApi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataWeather } from '../app/weatherSlice';

function Dashboard(props) {
    const dataError = useSelector(state => state.weather.error);
    const [tab, SetTab] = useState('today')
    const handleChangeTab = (data) => {
        SetTab(data)
    }
    const dispatch = useDispatch();


    // useEffect(() => {
    //     (
    //         async () => {
    //             try {
    //                 const data = await weatherApi.defaultWeather(21.0245, 105.8412);
    //                 dispatch(fetchDataWeather(data))
    //             } catch (error) {
    //                 console.log()
    //             }
    //         }
    //     )();
    // }, [])
    return (
        <div className='dashboard-weather'>
            <div className="left-sidebar">
                <LeftSidebar />
            </div>
            <div className="right-content">
                {dataError && (<div className="alert-danger">{dataError}</div>)}
                <Menu currentTab={tab} handleChangeTab={handleChangeTab} />
                {
                    tab === 'today' && (
                        <Today />
                    )
                }

                {
                    tab === 'week' && (
                        <Week />
                    )
                }

                {
                    tab === 'hour' && (
                        <Hour />
                    )
                }
            </div>
        </div>
    );
}

export default Dashboard;