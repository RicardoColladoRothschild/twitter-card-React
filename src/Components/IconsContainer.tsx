import React from 'react';
import { IconContext } from 'react-icons';
import { FiBarChart2, FiHeart, FiLayers, FiMessageCircle, FiRefreshCcw, FiShare } from "react-icons/fi";
import '../styles/IconsContainer.css';
export const IconsContainer:React.FC = ()=>{

    return(
        <IconContext.Provider value={{size:"22px"}}>
        <div className="icons-container">
            <div className="icon-self-container comments-icons-container">
            <FiMessageCircle/><p>15</p>
            </div>

            <div className="icon-self-container layers-icons-container">
            <FiLayers/><p>25</p>
            </div>

            
            <div className="icon-self-container layers-icons-container">
            <FiRefreshCcw/><p>25</p>
            </div>
            
            
            <div className="icon-self-container heart-icons-container">
            <FiHeart/><p>100</p>
            </div>

            
            <div className="icon-self-container chart-icons-container">
            <FiBarChart2/><p>100</p>
            </div>

            <div className="icon-self-container share-icons-container">
            <FiShare/>
            </div>
        </div>
        </IconContext.Provider>
        
    );
}