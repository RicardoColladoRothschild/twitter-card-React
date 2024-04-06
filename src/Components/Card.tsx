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
                twitt={`Me he cconvertido en el mejor de los programadores que conozco`}
            />
        </div>
            
        </>
    );
}