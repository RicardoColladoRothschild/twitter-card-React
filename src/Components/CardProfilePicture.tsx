import React from 'react';
import profilePic from '../assets/profilePic.jpg';
import '../styles/CardProfilePicture.css';
export const CardProfilePicture:React.FC = ()=>{

    return(
        <>
        <div className="profile-pic-container">
            <img src={profilePic} alt="Profile_Pic"/>
        </div>
        </>
    );
}