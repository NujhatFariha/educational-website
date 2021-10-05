import React from 'react';
import './About.css';

const About = () => {
    return (
       <div>
            <div className="p-5 about text-light">
            <h1 className="header-font">Interested To Know <br/>About Us ?</h1>
            <p>We Provide IT Related Premium Courses in our Website.</p>
            <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="p-5 mt-3 mb-5">
            <h1 className="fw-bold mb-3">Our Mission : </h1>
            <div>
                <p className="fs-4 mb-5">
                    Our Mission is to Provide high quality courses for the students who are eager to learn and earn knowledge. We provide premium IT related courses for the people who wants to learn the basic to advance concepts of It related Subjects. We also try to provide 24 hr support to our enrolled students. Our mission is to give proper and required knowledge to the students and develop then as skilled person with IT knowledges.
                </p>
            </div>
        </div>
       </div>
    );
};

export default About;