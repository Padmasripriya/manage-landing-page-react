import React from 'react';
import headerImage from '../images/illustration-intro.svg'; 

function HeaderComponent() {
    return(
        <div className="d-md-inline-flex">
            <div className="left">
                <h1>Bring everyone together to build better products.</h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <a href="#" className="button">Get Started</a>
            </div>
            <div className="right">
                <img src={headerImage} alt="header image" />
            </div>
        </div>
    );
}

export default HeaderComponent;