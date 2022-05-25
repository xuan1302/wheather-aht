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

    const [weather, setWeather] = useState({});
    console.log(weather)

    useEffect(() => {
        (
            async () => {
                try {
                    const data = await weatherApi.default();
                    setWeather(data)
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
                        <Hour />
                    )
                }
            </div>
        </div>
    );
}

export default Dashboard;