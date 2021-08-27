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
        width: 100vw;
        margin: 0 auto;
        height: 100vh;
        max-width: 768px;
        ${device.tabletL}{
            margin-left: 10vw;
        }
        ${device.tablet}{
            width: 100vw;
            margin: 0;
            margin-top: 100px;
        }
    }
    `;
}}
`;

export default GlobalStyles;