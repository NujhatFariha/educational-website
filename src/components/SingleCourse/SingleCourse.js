import React from 'react';
import './SingleCourse.css'

const SingleCourse = (props) => {
    const { courseName, instructor, time, price, Ratings, Count, image } = props.course;
    return (
        // Course information
        <div className="">
            <div className="course-information-container d-flex p-2">
                <div>
                    <img style={{ width: '280px', height: '250px' }} src={image} alt="" />
                </div>
                <div className="pt-1 px-2">
                    <h3 className="fw-bold mb-2 text-center">{courseName}</h3>
                    <p>Instructor: <span className="fw-bold">{instructor}</span></p>
                    <p>{time}</p>
                    <div className="fw-bold mx-auto"><i class="fas fa-star text-warning"></i> {Ratings} ({Count})</div>
                    <div>
                    </div>
                    <h4 className="fw-bold">Price: {price} $</h4>
                    <div className="d-flex justify-content-between mt-2 px-3">
                        <div><button className="btn-style-1" >Enroll</button>
                        </div>
                        <div><button className="btn-style-2">Visit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SingleCourse;