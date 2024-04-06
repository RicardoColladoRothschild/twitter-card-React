import React from 'react';

import { CardSubContainer } from './CardSubContainer';
export const Card:React.FC=()=>{

    
    return(
        <>
        <div>
        
            <CardSubContainer
                username={"ricardo"}
                user={'@ridev_dom'}
                fecha={'Nov 25, 2024'}
                twitt={`Me estoy esforzando arduamente, para que mi nombre se escuche entre los grandes.
                \n Algun dia, lograre pensar en esto como mi momentos de inicio.`}
            />
        </div>
            
        </>
    );
}