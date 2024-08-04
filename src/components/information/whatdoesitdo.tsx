import React from 'react';
import './whatdoesitdo.css';

const WhatDoesItDo: React.FC = () => {
    return (
        <div>
        <div className="what-does-it-do">
            <div className="content">
                <p className="crossed">Sorry, can we recap?</p>
                <p>Get the gist, and quick</p>
                <p>Lose the poorly written, hard-to-follow notes with an instant summary of your meeting’s content, rolled up into just what you need to know.</p>
            </div>
            <div className="image-container">
                <img src="./public/summary.png" alt="Meeting Summary" />
            </div>
        </div>
        
        <div className="what-does-it-do">
            <div className="image-container">
                <img src="./public/summary.png" alt="Meeting Summary" />
            </div>
            <div className="content">
                <p className="crossed">I know you’re waiting on...</p>
                <p>Speed through follow up</p>
                <p>Have your AI assistant draft the follow up emails you mention while you’re still talking. Set up for you to send, in seconds, right after you close the call.</p>
            </div>
            
        </div>

        <div className="what-does-it-do">
            
            <div className="content">
                <p className="crossed">When was that due?</p>
                <p>Improve accountability</p>
                <p> Automatically save and assign key actions mentioned in meeting and bring them together with google tasks </p>
            </div>
            <div className="image-container">
                <img src="./public/summary.png" alt="Meeting Summary" />
            </div>
        </div>

        </div>
    );
}

export default WhatDoesItDo;
