import React from 'react';
import Banner1 from '../../images/banner1.png';

const Banner = () => {
    return (
        <div className="d-flex align-items-center justify-content-between ms-5" style={{backgroundColor: 'rgb(247, 248, 255)'}}>
            <div>
                <h1 className="banner-font">Welcome to <br/><span className="specific-design">EduCare</span></h1>
                <p className="fs-4">
                    We Provide Premium IT related Course and great service.
                </p>
                <button className="btn btn-secondary">Take a Tour</button>
            </div>
            <div>
            <img className="ms-4 banner1" src={Banner1} alt="" style={{width: '750px' }}/>
            </div>
        </div>
    );
};

export default Banner;