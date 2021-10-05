import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/courseData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className=" my-5 py-5 ">
            <h1 className="text-center fw-bold">Our Available Courses</h1>
            <p className="w-50 mx-auto text-center mt-3 fs-5">Here are the list of some courses that we provide in our website. You can learn and understand the very concepts easily from our courses and we also try to provide 24hr support to our student. Learn and explore yur desired course with us.</p>
            <div className=" p-5 my-3 course-container">
                {/* display all the courses on the course webpage */}
                {
                    courses.map(course =>
                        <SingleCourse
                            Key={SingleCourse.id}
                            course={course} >

                        </SingleCourse>)
                }
            </div>
        </div>

    );
};

export default Courses;