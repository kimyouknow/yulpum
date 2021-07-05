import React, {useState, useEffect} from "react";
import CoursesPresenter from "./CoursesPresenter";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {addCourse} from "../../_actions/course_actions";

const CoursesContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [clicked, setClicked] = useState(false)
    const [courseInput, setCourseInput] = useState("")
    const [courses, setCourses]= useState(["first"]);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            courseInput
        }
        dispatch(addCourse(body))
            .then(response => {
                if(response.payload.isWell) {
                    setCourses(courses => [...courses, response.payload.title])
                    history.push('/');
                } else {
                    alert("Error!");
                }
            })
    }
    const clickHandler = () => {
        if(clicked) {
            setClicked(false);
        } else {
            setClicked(true)
        }
    }
    return(
        <CoursesPresenter 
            clicked={clicked}
            clickHandler={clickHandler}
            courseInput={courseInput}
            setCourseInput={setCourseInput}
            onSubmitHandler={onSubmitHandler}
            courses={courses}
        />
        )
}
export default CoursesContainer