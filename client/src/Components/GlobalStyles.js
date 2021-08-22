import {createGlobalStyle} from "styled-components";
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
    body{
        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 50px;
        margin: 0 auto;
        position: relative;
        width: 90vw;
        height: 100vh;
        max-width: 990px;
    }
`;

export default GlobalStyles;