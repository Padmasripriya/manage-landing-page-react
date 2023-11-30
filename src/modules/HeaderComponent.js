import React from 'react';
import headerImage from '../images/illustration-intro.svg'; 

function HeaderComponent() {
    return(
        <>
            <div className="d-md-inline-flex d-none">
                <div className="left">
                    <h1 className="fw-bold">Bring everyone together to build better products.</h1>
                    <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                    <a href="#" className="button">Get Started</a>
                </div>
                <div className="right">
                    <img src={headerImage} alt="header image" />
                </div>
            </div>
            <div class="d-md-none d-block mb-5 mt-5">
                <div>
                    <img src={headerImage} alt="header image" />
                </div>
                <div className="text-center">
                        <h1 className="fw-bold">Bring everyone together to build better products.</h1>
                        <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                        <a href="#" className="button">Get Started</a>
                </div>
            </div>
        </>
    );
}

export default HeaderComponent;