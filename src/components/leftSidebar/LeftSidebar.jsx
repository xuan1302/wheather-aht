import React from 'react';
import imgTT from '../../asset/images/download.png'
import imgBg from '../../asset/images/vector.png'

function LeftSidebar(props) {
    return (
        <div className='wrap'>
            <form className="mb-3">
                <input type="text" className="form-control" placeholder="Search" data-toggle="tooltip" data-placement="top" title="Press city name then Enter" />
            </form>
            <img src={imgTT} alt="" />
            <div className="fs-2 fw-bold lh-sm text-dack">Ha Noi</div>
            <div className="fs-1 fw-bold">28 °C</div>
            <div className="fs-5 lh-lg">Wednesday, 11:00 pm</div>
            <div className="fs-6 lh-base text-capitalize text-muted mb-3">broken clouds <br />Clouds 79%</div>
            <div className="position-relative d-flex justify-content-center align-items-center">
                <div className="position-absolute">
                    <div className="fs-3 fw-bold text-white">Ha Noi</div>
                </div>
                <img src={imgBg} alt="" className="img-fluid rounded " />
            </div>
        </div>
    );
}

export default LeftSidebar;