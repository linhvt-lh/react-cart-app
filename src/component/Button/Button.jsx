import React, { Children } from "react";
import {ButtonStyled} from './styled.jsx';

export default function Button(props){
   
    const {btnType, children, ...rest} = props;

    return <ButtonStyled 
            btnType={btnType}
            {...rest}>
            {children}
        </ButtonStyled>
}