import React from 'react';
import { IconContext } from 'react-icons';
import { FiMoreHorizontal } from 'react-icons/fi';
import '../styles/CardSubContainer.css';
import { CardProfilePicture } from './CardProfilePicture';
import { IconsContainer } from './IconsContainer';
interface Props{
    username:string;
    user:string;
    fecha:string;
    twitt:string;
}
export const CardSubContainer:React.FC<Props> = ({username, user, fecha, twitt}: Props)=>{

    return(
        <IconContext.Provider value={{size:"35px", color:"grey"}}>

            
        <div className='card-sub-container'>
            <CardProfilePicture/>
           <div className="user-data-info">
            <div className="user-date-name-information-container">
            <p className="user-data-info-paragraph">{`${username}`}</p>
            <p className="user-date-container">{`${user} ${fecha}`}</p>
            <span className="menu-dots-image-container"><FiMoreHorizontal/></span>
            </div>            
           <p className="twitt-text-container">{`${twitt}`}</p>
           <IconsContainer/>
           </div> 
            
        </div>

        </IconContext.Provider>
    );
}