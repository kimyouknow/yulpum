import {createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
/* 원하는 대로 초기화값입력 */
a{
    text-decoration: none;
    color: inherit;
}
input, button, textarea {
    background-color: transparent;
    border: none;
    outline: none;
    resize: none;
}
*{
    box-sizing:border-box;
    font-size: 100%;
}
${({ theme }) => {
    const { device, fonts} = theme;
    return css`
    body {
        font-family: ${fonts.family.base};
        font-weight: ${fonts.weight.normal};
        font-size: ${fonts.size.base};
        position: relative; 
        margin: 0 auto;
        width: 100vw;
        margin-top: 100px;
        max-width: 768px;
        /* ${device.tabletL}{
            margin-left: 100px;
        } */
        ${device.tablet}{
            
        }
    }
    `;
}}
`;

export default GlobalStyles;