import React from 'react'
import styled from "styled-components";
import DetailModal from '../../Components/GroupComponents/DetailModal';
import LoaderCotainer from "../../Components/Loader";
import Container from '../../Styled/Container';

const Header = styled.div`
    margin-bottom: 50px;
`;
const Body = styled.ul`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
`;

const Li = styled.li`
    cursor: pointer;
    width: 100%;
    height: 140px;
    border: 1px solid #ced6e0;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color:#fff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > .group__title{
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    > .group__infos{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        row-gap: 1rem;
        > .group__info{
            font-size: 1.2rem;
            font-weight: 600;
            >.goup__info-ele{
                color: #a4b0be;
                font-size: 1rem;
                margin-right: 0.4rem;
            }
        }
    }
`;


function GStudyPresenter({founds, activeInfo,setActiveInfo}) {
    console.log(founds);
    return (
        <Container>
        <Header>스터디 그룹</Header>
        <Body>
            {!founds ? <LoaderCotainer />:
            founds.map(found => 
                <Li key={found._id} 
                onClick={()=> setActiveInfo({...found})}
                >
                    <div className={"group__title"}>
                        {found.g_name}
                    </div>
                    <div className={"group__infos"}>
                        <div className={"group__info"}>
                            <span className={"goup__info-ele"}>방장</span>
                            <span>{found.g_leader}</span>
                        </div>
                        <div className={"group__info"}>
                            <span className={"goup__info-ele"}>목표</span>
                            <span>{found.g_goal}</span>
                        </div>
                        <div className={"group__info"}>
                            <span className={"goup__info-ele"}>공부량</span>
                            <span>{found.g_mean_time}</span>
                        </div>
                        <div className={"group__info"}>
                            <span className={"goup__info-ele"}>인원</span>
                            <span>{found.g_current} / {found.g_max}</span>
                        </div>
                        <div className={"group__info"}>
                            <span className={"goup__info-ele"}>시작일</span>
                            <span>{found.g_start_date.slice(2,10)}</span>
                        </div>
                    </div>
                </Li>    
            )
            }
        </Body>
        {activeInfo && 
                    <DetailModal
                    activeInfo={activeInfo}
                    setActiveInfo={setActiveInfo}/>
                }
    </Container>
    )
}

export default GStudyPresenter
