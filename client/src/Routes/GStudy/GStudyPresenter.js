import React from 'react'
import styled from "styled-components";
import DetailModal from '../../Components/GroupComponents/DetailModal';
import LoaderCotainer from "../../Components/Loader";
import Container from '../../Styled/Container';
import { GroupElement } from '../../Styled/Group';

const Header = styled.div`
    margin-bottom: 50px;
`;
const Body = styled.ul`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
`;

function GStudyPresenter({founds, activeInfo,setActiveInfo}) {
    console.log(founds);
    return (
        <Container>
        <Header>스터디 그룹</Header>
        <Body>
            {!founds ? <LoaderCotainer />:
            founds.map(found => 
                <GroupElement key={found._id} 
                onClick={()=> setActiveInfo({...found})}
                detail={false}
                found={found}>
                </GroupElement>    
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
