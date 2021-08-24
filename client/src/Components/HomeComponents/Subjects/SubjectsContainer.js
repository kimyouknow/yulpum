import React, {useState, useEffect} from "react";
import SubjectsPresenter from "./SubjectsPresenter";
import {useDispatch} from "react-redux";
import { addSubject, deleteSubject, editSubject, getSubject } from "../../../_actions/subject_actions";


const SubjectsContainer = ({tokenData}) => {
    const dispatch = useDispatch();
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
        if(tokenData){
            let body = {
                token: tokenData
            }
            dispatch(getSubject(body))
                .then(response => {
                    const {payload} = response;
                    console.log(payload);
                    setSubjects(payload);
                })
        }
    }
    const handleRemove = (id) => {
        let body = {
            token: tokenData,
            subject_id: id,
        }
        dispatch(deleteSubject(body))
            .then(response => {
                const {isSuccess} = response.payload;
                if (!isSuccess) {
                    alert("Error!");
                } 
                // setSubjects(subjects.filter(element => element._id !== id));
            })
    }

    const onSubmitHandler = (e, element) => {
        e.preventDefault();
        if(subjectInput === ""){
            alert("뭐라도 입력하세요")
            return 
        }
        if (element === "add"){
        const addedName = subjectInput;
        setSubjectInput("");
        let body = {
            subject_title: addedName,
            token: tokenData,
            timeValue: 0
        };
        dispatch(addSubject(body))
            .then(response => {
                const {isSuccess, Study} = response.payload;
                if(isSuccess) {
                    console.log(response.payload)
                    // setSubjects(subject => [...subject, Study]);
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
                .then(response => {
                const {isSuccess} = response.payload;
                console.log(response.payload)
                if (!isSuccess) {
                    alert("Error!");
                } 
                // setSubjects(subjects.map(item => item._id === element ? {...item, subject_name: editInput} : item));
                })
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