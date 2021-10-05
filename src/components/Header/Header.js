import React from 'react';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        // Navigation Bar in the header
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: 'darkmagenta'}}>
                <div class="container-fluid">
                    <img className="ms-4 logo" src={logo} alt="" style={{width: '30px' }}/>
                    <h3 className="ms-1 me-5 fw-bold align-items-center justify-content-center" fs-5 style={{ color: 'thistle' }}>EduCare</h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto pe-5">
                            <li class="nav-item">
                                <Link to="/home" className="text-light fs-5 text-decoration-none">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/courses" className="text-light fs-5 fw-bold text-decoration-none ps-3">Courses</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className="text-light fs-5 text-decoration-none ps-3">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/signUp" className="text-light fs-5 text-decoration-none ps-3">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;