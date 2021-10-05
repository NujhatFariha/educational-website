import React from 'react';
import tutorial from '../../images/tutorial.png';
import support from '../../images/support.png';
import certificate from '../../images/certificate.png';
import './Details.css'

const Details = () => {
    return (
        // Details in the homepage
        <div className="pt-5 mt-5 mb-3">
            <h1 className="text-center fw-bold" style={{color: 'rgb(34, 122, 90)'}}>Included In Our Course</h1>
            <div>
                <div className="detail-container container mb-5 mt-4">
                    <div className=" p-1 border rounded-3 m-4">
                        <div>
                        <img className="tutorial p-2" src={tutorial} alt="" style={{width: '200px', height:'150px'}}/>
                        </div>
                        <div className="text-center">
                            <h3>200+ Tutorial</h3>
                            
                        </div>

                    </div>
                    <div className="p-1 border rounded-3 m-4">
                        <div>
                        <img className="support p-2" src={support} alt="" style={{width: '250px', height:'150px'}}/>
                        </div>
                        <div className="text-center">
                            <h3>24 hr Support</h3>
                        </div>

                    </div>
                    <div className="p-1 border rounded-3 m-4">
                        <div>
                        <img className="certificate p-2" src={certificate} alt="" style={{width: '200px', height:'150px'}}/>
                        </div>
                        <div className="text-center">
                            <h3>Get Certificate</h3>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;