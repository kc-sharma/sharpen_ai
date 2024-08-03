import React from 'react';
import './howitworks.css';

const HowItWorks: React.FC = () => {
    return (
        <div className="how-it-works">
            <h2>How it works</h2>
            <div className="steps">
                <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-description">Install the Sharpen AI google chrome extension and create your free account</div>
                </div>
                <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-description">The AI assistant will run in the background of every Google Meet</div>
                </div>
                <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-description">Sharpen will summarise the meeting, take down your actions and draft your follow up emails</div>
                </div>
                <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-description">Open the output document to do your follow ups in one click</div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
