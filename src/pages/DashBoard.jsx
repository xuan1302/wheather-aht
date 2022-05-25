import React, { useEffect, useState } from 'react';
import Menu from '../components/mainMenu/Menu';
import Today from './Today';
import Week from './Week';
import Hour from './Hour';
import LeftSidebar from '../components/leftSidebar/LeftSidebar';
import weatherApi from '../api/weatherApi';

function Dashboard(props) {
    const [tab, SetTab] = useState('today')
    const handleChangeTab = (data) => {
        SetTab(data)
    }

    const [hour, setHour] = useState({});

    useEffect(() => {
        (
            async () => {
                try {
                    const { current, daily, hourly } = await weatherApi.defaultWeather();
                    setHour(hourly)
                } catch (error) {
                    console.log()
                }
            }
        )();
    }, [])
    return (
        <div className='dashboard-weather'>
            <div className="left-sidebar">
                <LeftSidebar />
            </div>
            <div className="right-content">
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
                        <Hour dataHour={hour} />
                    )
                }
            </div>
        </div>
    );
}

export default Dashboard;