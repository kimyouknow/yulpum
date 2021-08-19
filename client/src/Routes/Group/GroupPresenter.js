import React from "react";
import styled from "styled-components";
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

const GroupPresenter = ({inputData, onSubmitHandler}) => {
    const {groupName, groupGoal, groupMax, search, setGroupName, setGroupGoal, setGroupMax, setSearch, } = inputData;
    return(
        <Container>
            <Header>Group</Header>
            <Body>
                <Container>
                    <h3>그룹 만들기</h3>
                    <form onSubmit={(e => onSubmitHandler(e, "create"))}
                    style={{display: "flex", flexDirection:"column"}}>
                        <label>그룹명</label>
                        <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
                        <label>그룹목표</label>
                        <input type="number" value={groupGoal} onChange={(e) => setGroupGoal(e.target.value)} />
                        <label>최대인원</label>
                        <input type="number" value={groupMax} onChange={(e) => setGroupMax(e.target.value)} />
                        <input type="submit" value="추가" />
                    </form>
                </Container>
                <Container>
                    <h3>내가 가입한 그룹</h3>
                    {/* 내 그룹표시 */}
                </Container>
                <Container>
                    <h3>그룹 검색</h3>
                    <form onSubmit={(e => onSubmitHandler(e, "search"))}
                        style={{display: "flex", flexDirection:"column"}}>
                        <label>그룹검색</label>
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <input type="submit" value="검색" />
                    </form>
                </Container>
            </Body>
        </Container>
    )
}
export default GroupPresenter