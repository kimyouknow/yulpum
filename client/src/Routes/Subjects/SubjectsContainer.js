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
    // courese를 임시로 생성한거 
    // const [subjects, setSubjects]= useState([{name: "first", id : 2511234},{name: "second", id: 234253}]);
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
                // console.log(response);
                const {token, studySubject} = response.payload;
                if(token !== tokenData) {
                    alert("Error!");
                    history.push('/');
                }
                console.log(studySubject);
                setSubjects(studySubject);
            })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const addedName = subjectInput;
        let body = {
            subject: addedName,
            token: tokenData,
            timeValue: 0
        };
        dispatch(addSubject(body))
            .then(response => {
                const {isWell, subjects} = response.payload;
                if(isWell) {
                    // const newSubject = {name: response.payload.title, id: response.payload.id}
                    // setSubjects(subject => [...subject, newSubject]);
                    setSubjects(subjects)
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