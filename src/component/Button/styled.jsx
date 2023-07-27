import Styled from 'styled-components';
import {Button} from 'antd';

const btnType  = (btnType) =>{
    if(btnType === 'black'){
        return `
            background-color: black;
            color: #fff;
        `
    }
    if(btnType === 'yellow'){
        return `
            background-color: #FF5722;
            color: #fff;
        `
    }
}
const ButtonStyled = Styled(Button)`
    ${(props) => props.btnType && btnType(props.btnType)};
`
export {ButtonStyled}