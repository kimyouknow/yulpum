import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = styled.nav`
    ${({theme}) => {
        const {common, colors, fonts} = theme;
        return css`
            z-index: 10;
            position: fixed;
            ${common.flexCenter}
            width: 100%;
            height: 100px;
            top: 0;
            left: 0;
        > ul{
            ${common.flexCenter}
            height: 100%;
            width: 100%;
            background-color: ${colors.white};
            border-bottom: 1px solid ${colors.grey};
            >li{
                height: 100%;
                width: 100%;
                text-align: center;
                >a{
                    height: 100%;
                    ${common.flexCenter}
                    font-size: ${fonts.size.base};
                    font-weight: ${fonts.weight.bold};
                }
                /* >div{
                    height: 100%;
                    width: 100%;
                    ${common.flexCenter}
                    font-size: ${fonts.size.xl};
                    font-weight: ${fonts.weight.bold};
                } */
            }
        }
        `; 
    }}
`;  

const Li = styled.li`
    color: ${props => props.current ? "black" : "#a4b0be"};
`;

export default withRouter(({location: {pathname}}) => (
    <Navigation>
        <ul>
            <Li current={pathname === "/stat"}>
                <Link to="/stat">통계</Link>
            </Li>
            <Li current={pathname === "/planner"}>
                <Link to="/planner">플래너</Link>
            </Li>
            {/* <div><FontAwesomeIcon icon={faUser} /></div>: */}
            <Li current={pathname === "/"}>
                <Link to="/">Home</Link>
            </Li>
            <Li current={pathname === "/group"}>
                <Link to="/group">그룹</Link>
            </Li>
            <Li current={pathname === "/rank"}>
                <Link to="/rank">랭킹</Link>
            </Li>
        </ul>
    </Navigation>
))