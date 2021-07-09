import React, {useState, useEffect} from "react";
import CoursesPresenter from "./CoursesPresenter";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {addCourse, getCourses} from "../../_actions/course_actions";

const CoursesContainer = ({userID}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [clicked, setClicked] = useState(false)
    const [courseInput, setCourseInput] = useState("");
    // courese를 임시로 생성한거 
    const [courses, setCourses]= useState([{name: "first", id : 2511234},{name: "second", id: 234253}]);
    const displayCourses = () => {
        if(userID) {
        let body = {
            userID
        }
        // console.log(userID)
        dispatch(getCourses(body))
            .then(response => {
                console.log(response);
            })
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const addedName = courseInput;
        const addedId = Date.now();
        let body = {
            addedName,
            addedId
        };
        dispatch(addCourse(body))
            .then(response => {
                if(response.payload.isWell) {
                    const newCourse = {name: response.payload.title, id: response.payload.id}
                    setCourses(courses => [...courses, newCourse]);
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
    useEffect(() => {
        displayCourses();
    },[userID])
    return(
        <CoursesPresenter 
            clicked={clicked}
            clickHandler={clickHandler}
            courseInput={courseInput}
            setCourseInput={setCourseInput}
            onSubmitHandler={onSubmitHandler}
            courses={courses}
            userID={userID}
        />
        )
}
export default CoursesContainer