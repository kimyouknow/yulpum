import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBars, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import AddModal from "../../Components/GroupComponents/AddModal";
import Loader from "../../Components/Loader";
import Container from "../../Styled/Container";
import { SideBar } from "../../Styled/SideBar";
import { GroupElement } from "../../Styled/Group";

const Body = styled.ul`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

const GroupPresenter = ({groups, handleModal ,openModal ,setOpenModal, found}) => {
    console.log(groups)
    return(
        <Container>
            <Body>
                <h3>내가 가입한 그룹</h3>
                {!groups ? <Loader /> : groups.map(ele=> 
                    <GroupElement key={ele._id} detail={true} found={ele}></GroupElement>  
                )}
            </Body>
            <SideBar>
                <div className={"subBtn first"}>
                    <Link to="/group/study" >
                        <FontAwesomeIcon icon={faUserFriends} />
                    </Link>
                </div>
                <div className={"subBtn second"} onClick={()=> handleModal()} >
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div  className={"menuBtn"} >
                    <FontAwesomeIcon icon={faBars}/>
                </div>
            </SideBar>
        <AddModal openModal={openModal} setOpenModal={setOpenModal} />
        </Container>
    )
}
export default GroupPresenter