import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    /* 원하는 대로 초기화값입력 */
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
        background-color: #f5f6fa;
        color: black;
        padding: 12px;
        width: 940px;
        height: 740px;
    }
`;

export default GlobalStyles;