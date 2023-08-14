import Styled from 'styled-components';
import { Button } from 'antd';

const btntype  = (btntype) =>{
    if(btntype === 'black'){
        return `
            background-color: black;
            color: #fff;
        `
    }
    if(btntype === 'yellow'){
        return `
            background-color: #FF5722;
            color: #fff;
        `
    }
}
const ButtonStyled = Styled(Button)`
    ${(props) => props.btntype && btntype(props.btntype)};
`
export {ButtonStyled}