import React from 'react';
import blog1 from '../../images/blog-1.png';
import blog2 from '../../images/blog-2.png';
import blog3 from '../../images/blog-3.png';
import './Blog.css'


const Blog = () => {
    return (
        // Blog
        <div className="py-5 my-5">
            <h1 className="text-center fw-bold" style={{color: 'rgb(34, 122, 90)'}}>Our Recent Blog</h1>
            <div>
                <div className="blog-container container mb-5 mt-2">
                    <div className="p-5 border rounded-3 m-4">
                        <div>
                        <img className="blog-1 p-2" src={blog1} alt="" style={{width: '250px', height:'200px'}}/>
                        </div>
                        <div className="p-2">
                            <h3>Build your dream Career with us</h3>
                            <p>We provide all the facilities for you to learn and get skilled. We also provide tips and tricks for interview and support when you need.</p>
                        </div>

                    </div>
                    <div className="p-5 border rounded-3 m-4">
                        <div>
                        <img className="blog-2 p-2" src={blog2} alt="" style={{width: '250px', height:'200px'}}/>
                        </div>
                        <div className="p-2">
                            <h3>Get Special Support from us</h3>
                            <p>We provide 24 hr support. you can join us anytime you want with your problems.We try to solve every problem and give solution to you anytime.</p>
                        </div>

                    </div>
                    <div className="p-5 border rounded-3 m-4">
                        <div>
                        <img className="blog-1 p-2" src={blog3} alt="" style={{width: '250px', height:'200px'}}/>
                        </div>
                        <div className="p-2">
                            <h3>Updates of the latest course</h3>
                            <p>Subscribe us and turn on notification in the website so that you can get notified about our latest released course and updates. </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;