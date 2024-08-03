import React, { useState } from 'react';
import './homepage.css';
import HowItWorks from './information/howitworks';  // Import the HowItWorks component

type ActiveComponent = 'whatDoesItDo' | 'howItWorks' | 'whoIsSharpenFor' | 'trustedAndSecure' | 'commonQuestions' | null;

const HomePage: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<ActiveComponent>(null);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'howItWorks':
                return <HowItWorks />;
            // Add more cases here for other components
            default:
                return null;
        }
    };

    return (
        <div>
            <div className='navbarfixed'>
                <div className="navbar">
                    <img className='logo' src="./public/logo.svg" alt="logo" />
                    <div className="navElements" onClick={() => setActiveComponent('whatDoesItDo')}>What Does it Do?</div>
                    <div className="navElements" onClick={() => setActiveComponent('howItWorks')}>How It Works</div>
                    <div className="navElements" onClick={() => setActiveComponent('whoIsSharpenFor')}>Who is Sharpen For?</div>
                    <div className="navElements" onClick={() => setActiveComponent('trustedAndSecure')}>Trusted & Secure</div>
                    <div className="navElements" onClick={() => setActiveComponent('commonQuestions')}>Common Questions</div>
                </div>
            </div>
            {renderComponent()}
        </div>
    );
}

export default HomePage;
