import React from 'react';
import { CardProfilePicture } from './CardProfilePicture';
import { CardSubContainer } from './CardSubContainer';
export const Card:React.FC=()=>{

    
    return(
        <>
            <CardProfilePicture/>
            <CardSubContainer
                username={"ricardo"}
                user={'@ridev_dom'}
                fecha={'Nov 25, 2024'}
                twitt={`Me he cconvertido en el mejor de los programadores que conozco`}
            />
        </>
    );
}