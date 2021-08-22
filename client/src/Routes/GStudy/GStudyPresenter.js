import React from 'react'
import styled from "styled-components";
import EditModal from '../../Components/GroupComponents/EditModal';
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
const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

const Li = styled.li`
    cursor: pointer;
    :hover {
        background-color: rgba(0,0,0,0.5);
    }
`;

function GStudyPresenter({founds, activeInfo,setActiveInfo}) {
    console.log(founds);
    return (
        <Container>
        <Header>Group</Header>
        <Body>
            <ul>
            {!founds ? <LoaderCotainer />:
            founds.map(found => 
                <Li key={found._id} 
                onClick={()=> setActiveInfo({g_id:found._id, g_name: found.g_name})}
                >
                    <div>
                        그룹명{found.g_name}
                    </div>
                    <div>
                        <span>{found.g_leader}</span>
                        <span>{found.g_goal}</span>
                        <span>{found.g_current} / {found.g_max}</span>
                        <span>{found.g_start_date.slice(1,10)}</span>
                    </div>
                </Li>    
            )
            }
            </ul>
            
        </Body>
        {activeInfo && 
                    <EditModal
                    activeInfo={activeInfo}
                    setActiveInfo={setActiveInfo}/>
                }
    </Container>
    )
}

export default GStudyPresenter
