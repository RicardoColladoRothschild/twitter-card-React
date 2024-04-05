import React from 'react';
import '../styles/CardSubContainer.css';
interface Props{
    username:string;
    user:string;
    fecha:string;
    twitt:string;
}
export const CardSubContainer:React.FC<Props> = ({username, user, fecha, twitt}: Props)=>{

    return(
        <div className='card-sub-container'>
           <div className="user-data-info"><p className="user-data-info-paragraph">{`${username}`}</p>
           <span>{`${user} ${fecha}`}</span>
           </div> 
            <p>{`${twitt}`}</p>
        </div>
    );
}