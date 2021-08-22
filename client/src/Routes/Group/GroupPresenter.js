import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBars, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import AddModal from "../../Components/GroupComponents/AddModal";
import LoaderCotainer from "../../Components/Loader";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-bottom: 50px;
`;
const Header = styled.div`
    margin-bottom: 50px;
`;
const Nav = styled.nav`
    position: absolute;
    right: 20px;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
    color: white;
    &:hover .subBtn {
        opacity: 1;
        visibility: visible;
        top: 0;
    }
    & svg {
        cursor: pointer;
        box-sizing: content-box;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.5);
        :hover {
                transform: scale(1.2);
            }
        &.GStudyBtn {
            background-color:orange;
            z-index: 1;
            transition: all 0.4s ease;
        }
        &.addBtn {
            background-color: orange;
            z-index: 2;
            transition: all 0.5s ease;
        }
        &.menuBtn {
            background-color: orange;
            z-index: 4;
        }
        &.subBtn {
            opacity: 0;
            visibility: hidden;
            top: 60px;
            position: relative;
        }
    }
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

const GroupPresenter = ({handleModal ,openModal ,setOpenModal, found}) => {
    return(
        <Container>
            <Header>Group</Header>
            <Body>
                <Container>
                    <h3>내가 가입한 그룹</h3>
                    {/* 내 그룹표시 */}
                </Container>
            </Body>
            <Nav>
                <Link to="/group/study">
                    <FontAwesomeIcon icon={faUserFriends} className={"subBtn GStudyBtn"} />
                </Link>
                <FontAwesomeIcon icon={faPlus} className={"subBtn addBtn"} onClick={()=> handleModal()} />
                <FontAwesomeIcon icon={faBars} className={"menuBtn"} />
                {/* <MdAdd  onClick={() => dispatch(setModal("add"))} /> */}
            </Nav>
        <AddModal openModal={openModal} setOpenModal={setOpenModal} />
        </Container>
    )
}
export default GroupPresenter