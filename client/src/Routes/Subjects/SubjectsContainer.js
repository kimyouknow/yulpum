import React, {useState, useEffect} from "react";
import SubjectsPresenter from "./SubjectsPresenter";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {addSubject, getSubject} from "../../_actions/subject_actions";

const SubjectsContainer = () => {
    const token = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const history = useHistory();
    const [clicked, setClicked] = useState(false)
    const [subjectInput, setSubjectInput] = useState("");
    // courese를 임시로 생성한거 
    const [subjects, setSubjects]= useState([{name: "first", id : 2511234},{name: "second", id: 234253}]);
    const displaySubject = () => {
        let body = {
            token
        }
        dispatch(getSubject(body))
            .then(response => {
                console.log(response);
            })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const addedName = subjectInput;
        const addedId = Date.now();
        let body = {
            addedName,
            addedId
        };
        dispatch(addSubject(body))
            .then(response => {
                if(response.payload.isWell) {
                    const newSubject = {name: response.payload.title, id: response.payload.id}
                    setSubjects(subject => [...subject, newSubject]);
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
        displaySubject();
    },[])
    return(
        <SubjectsPresenter 
            clicked={clicked}
            clickHandler={clickHandler}
            subjectInput={subjectInput}
            setSubjectInput={setSubjectInput}
            onSubmitHandler={onSubmitHandler}
            subjects={subjects}
        />
        )
}
export default SubjectsContainer