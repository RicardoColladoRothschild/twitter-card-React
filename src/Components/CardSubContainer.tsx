import React from 'react';
import menuDots from '../assets/menu_dots.png';
import '../styles/CardSubContainer.css';
import { CardProfilePicture } from './CardProfilePicture';
interface Props{
    username:string;
    user:string;
    fecha:string;
    twitt:string;
}
export const CardSubContainer:React.FC<Props> = ({username, user, fecha, twitt}: Props)=>{

    return(
        <div className='card-sub-container'>
            <CardProfilePicture/>
           <div className="user-data-info">
            <div className="user-date-name-information-container">
            <p className="user-data-info-paragraph">{`${username}`}</p>
            <p className="user-date-container">{`${user} ${fecha}`}</p>
            <span className="menu-dots-image-container"><img src={menuDots} alt="Menu"/></span>
            </div>            
           <p className="twitt-text-container">{`${twitt}`}</p>
           </div> 
            
        </div>
    );
}