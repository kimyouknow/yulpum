import React from 'react'
import styled from 'styled-components';
import Header from '../../Styled/Header';

const Container = styled.div`
    display: ${props => props.active ? "flex": "none"};
    flex-direction:column;
    align-items: center;
    width: 100%;
`;

function MemberRank({active}) {
  return (
    <Container active={active}>

    </Container>
  )
}

export default MemberRank
