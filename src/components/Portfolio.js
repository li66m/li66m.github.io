// Portfolio.js
import React from 'react';

const Portfolio = () => {
    return (
        <div className="section" id="portfolio">
            <h2>Portfolio</h2>
            <p>Check out my projects and work.</p>
            
            <p><b>Machine Learning Project</b></p>
            <p>Created a Convolutional Neural Network (CNN) designed for image classification on the MNIST database.
                <br></br>Will throw a video demo once I'm back in Ottawa.
            </p>

            <p><b>Watchlist database</b></p>
            <p>This was a final project from COMP3005. It's purpose is to store movies, books, lists, and users. Currently there is only a couple of test 
                users, 15 books, and 15 movies. However, it is scalable to have thousands if needed.
                <br></br>Will throw a video demo once I'm back in Ottawa too.
            </p>
        </div>
    );
};

export default Portfolio;