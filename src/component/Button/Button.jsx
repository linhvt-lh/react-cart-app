import React, { Children } from "react";
import {ButtonStyled} from './styled.jsx';

export default function Button(props){
   
    const { btntype, children, ...rest} = props;
    if(btntype){
        return <ButtonStyled 
        btntype={btntype}
            {...rest}>
            {children}
        </ButtonStyled>
    }
    return <ButtonStyled 
        {...rest}>
        {children}
    </ButtonStyled>
   
}