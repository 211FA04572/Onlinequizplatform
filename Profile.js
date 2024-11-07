import React, { useState } from 'react';

const Profile = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('about');

    // Function to change the active tab
    const showTab = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="profile-card">
            <img src="https://via.placeholder.com/100" alt="Profile" className="profile-pic" />
            <h2>Lilly's Profile</h2>
            <div className="tabs">
                <div className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => showTab('about')}>About</div>
                <div className={`tab ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => showTab('skills')}>Skills</div>
                <div className={`tab ${activeTab === 'activity' ? 'active' : ''}`} onClick={() => showTab('activity')}>Activity</div>
            </div>
            <div id="about" className={`tab-content ${activeTab === 'about' ? 'active' : ''}`}>
                <p>Bio: A passionate quiz enthusiast with a love for learning and sharing knowledge.</p>
                <p>Email: lilly@example.com</p>
            </div>
            <div id="skills" className={`tab-content ${activeTab === 'skills' ? 'active' : ''}`}>
                <p>JavaScript, HTML, CSS, React</p>
            </div>
            <div id="activity" className={`tab-content ${activeTab === 'activity' ? 'active' : ''}`}>
                <p>Completed a quiz on General Knowledge</p>
                <p>Scored 85% in Science Quiz</p>
                <p>Participated in a JavaScript Workshop</p>
            </div>
            <button className="edit-btn">Edit Profile</button>
        </div>
    );
};

export default Profile;