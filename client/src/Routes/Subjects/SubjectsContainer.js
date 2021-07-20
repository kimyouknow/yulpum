import React, {useState, useEffect} from "react";
import SubjectsPresenter from "./SubjectsPresenter";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {addSubject, getSubject} from "../../_actions/subject_actions";

const SubjectsContainer = ({tokenData}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [clicked, setClicked] = useState(false)
    const [subjectInput, setSubjectInput] = useState("");
    const [subjects, setSubjects] = useState(null);
    const clickHandler = () => {
        if(clicked) {
            setClicked(false);
        } else {
            setClicked(true)
        }
    }
    const displaySubject = () => {
        let body = {
            token: tokenData
        }
        dispatch(getSubject(body))
            .then(response => {
                const {payload} = response;
                // console.log(payload);
                setSubjects(payload);
            })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const addedName = subjectInput;
        let body = {
            subject_title: addedName,
            token: tokenData,
            timeValue: 0
        };
        dispatch(addSubject(body))
            .then(response => {
                const {isWell, Study} = response.payload;
                if(isWell) {
                    // const newSubject = {name: response.payload.title, id: response.payload.id}
                    setSubjects(subject => [...subject, Study]);
                    // setSubjects(subjects)
                    history.push('/');
                } else {
                    alert("Error!");
                }
            })
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