import React, {useState} from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddCourse from "../../Components/AddCourse";
import Course from "../../Components/Course";

const Container = styled.div`
    width: 100%;
`;

const UList = styled.ul`
    display: flex;
    flex-direction: column;
`;

const Line = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: 4px;
    &:hover {
        cursor: pointer;
        background-color: #dcdde1;
    }
`;

const Button = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 12px;
`;

const Text = styled.div`
    font-size: 24px;
`;


const CoursesPresenter = ({clicked, clickHandler, courseInput, setCourseInput, onSubmitHandler, courses}) => {
    console.log(courses);
    return (
        <>
        <AddCourse clicked={clicked} clickHandler={clickHandler} courseInput={courseInput} setCourseInput={setCourseInput} onSubmitHandler={onSubmitHandler}/>
        <Container>
            <UList>
                {!courses ? 
                <Line><Text>Empty</Text></Line> :
                courses.map(course => <Line><Course text={course} /></Line>)
            }
                <Line onClick={() => clickHandler()}>
                    <Button><FontAwesomeIcon icon={faPlus} /></Button>
                    <Text>과목 추가하기1</Text>
                </Line>
            </UList>
        </Container>
        </>
    )
}
export default CoursesPresenter