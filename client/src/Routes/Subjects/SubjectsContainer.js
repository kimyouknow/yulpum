import React, {useState, useEffect} from "react";
import SubjectsPresenter from "./SubjectsPresenter";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import {addSubject, deleteSubject, editSubject, getSubject} from "../../_actions/subject_actions";

const SubjectsContainer = ({tokenData}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [clicked, setClicked] = useState({
        editButton: false,
        addButton: false
    });
    const [subjectInput, setSubjectInput] = useState("");
    const [editInput, setEditInput] = useState("");
    const [subjects, setSubjects] = useState(null);
    const clickhandler= (text) => {
        if (text === "add") {
            clicked.addButton ? setClicked({addButton: false}) : setClicked({addButton: true});
        } else if (text === "edit") {
            clicked.editButton ? setClicked({editButton: false}) : setClicked({editButton: true});
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
    const handleRemove = (id) => {
        let body = {
            token: tokenData,
            subject_id: id,
        }
        dispatch(deleteSubject(body))
            .then(response => console.log(response))
    }

    const onSubmitHandler = (e, element) => {
        e.preventDefault();
        if (element === "add"){
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
        } else {
            let body = {
                subject_id: element,
                token: tokenData,
                editSubject_title: editInput
            };
            dispatch(editSubject(body))
                .then(response => console.log(response))
        }
    }
    useEffect(() => {
        displaySubject();
    },[])
    return(
        <SubjectsPresenter 
            clicked={clicked}
            clickhandler={clickhandler}
            subjectInput={subjectInput}
            setSubjectInput={setSubjectInput}
            editInput={editInput}
            setEditInput={setEditInput}
            onSubmitHandler={onSubmitHandler}
            subjects={subjects}
            handleRemove={handleRemove}
        />
        )
}
export default SubjectsContainer