import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import Banner from '../Banner/Banner';
import Details from '../Details/Details';
import './Home.css';


const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/courseData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
      <div className=" ">
        <Banner/>
        <Details/>
        <h1 className="text-center my-5 fw-bold">Our Top Selling Courses</h1>
        
            <div className=" px-5 home-course-container mb-5">
              {/* displayed 4 courses on the home */}
                {
                    courses.slice(0,4).map(course =>
                        <SingleCourse
                            Key={SingleCourse.id}
                            course={course} >
                        </SingleCourse>)
                }
            </div>
            </div>
    );
};

export default Home;