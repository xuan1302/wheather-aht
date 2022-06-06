import React, { useEffect, useState } from 'react';
import Menu from '../components/mainMenu/Menu';
import Today from './Today';
import Week from './Week';
import Hour from './Hour';
import LeftSidebar from '../components/leftSidebar/LeftSidebar';
import { useSelector } from 'react-redux';

function Dashboard(props) {
    const dataError = useSelector(state => state.weather.error);
    const [tab, SetTab] = useState('today')
    const handleChangeTab = (data) => {
        SetTab(data)
    }
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