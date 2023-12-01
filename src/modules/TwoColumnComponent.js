import React from 'react';

function TwoColumnComponent() {
    return(
        <div className="d-md-inline-flex d-block">
            <div className="left text-center text-md-start mb-5 mb-md-0">
                <h2 className="fw-bold">What's different about Manage?</h2>
                <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
            </div>
            <div className="right">
                <div className="mb-5">
                    <span className="text-center text-md-start">
                        <a href="#" className="num d-none">01</a>
                        <h3 className="fw-bold">Track company-wide progress</h3>
                    </span>
                    <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                </div>
                <div className="mb-5">
                    <span className="text-center text-md-start">
                        <a href="#" className="num d-none">02</a>
                        <h3 className="fw-bold">Advanced built-in reports</h3>
                    </span>
                    <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                </div>
                <div className="mb-5">
                    <span className="text-center text-md-start">
                        <a href="#" className="num d-none">03</a>
                        <h3 className="fw-bold">Everything you need in one place</h3>
                    </span>
                    <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                </div>
            </div>
        </div>
    );
}

export default TwoColumnComponent;