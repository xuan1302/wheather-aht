import React, { memo } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useSelector } from 'react-redux';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Hour(props) {
    // console.log('render')
    const dataWeather = useSelector(state => state.weather.data);
    const options = {
        responsive: true,
    };

    const labels = (dataWeather && dataWeather[0].hourly).map(hours => {
        return moment.unix(hours.dt).format('h:mm a')
    })

    const data = {
        labels,
        datasets: [
            {
                label: 'Temp(°C)',
                data: labels.map((data, ind) => dataWeather[0].hourly[ind].temp),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Feel like(°C)',
                data: labels.map((data, ind) => dataWeather[0].hourly[ind].feels_like),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return (
        <div className='content-hourly'>
            <Line options={options} data={data} />
        </div>
    );
}

export default memo(Hour);