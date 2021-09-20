import React, { useState, useEffect } from "react";
import SubjectsPresenter from "./SubjectsPresenter";
import { useDispatch } from "react-redux";
import {
  addSubject,
  deleteSubject,
  editSubject,
  getSubject,
} from "../../../_actions/subject_actions";

const SubjectsContainer = ({ tokenData }) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState({
    editButton: false,
    addButton: false,
  });
  const [activeSubject, setActiveSubject] = useState(null);
  const [subjects, setSubjects] = useState(null);
  const clickhandler = (text) => {
    if (text === "add") {
      clicked.addButton
        ? setClicked({ addButton: false })
        : setClicked({ addButton: true });
    } else if (text === "edit") {
      clicked.editButton
        ? setClicked({ editButton: false })
        : setClicked({ editButton: true });
    }
  };
  const displaySubject = () => {
    if (tokenData) {
      let body = {
        token: tokenData,
      };
      dispatch(getSubject(body)).then((response) => {
        const {
          payload: { line, subject },
        } = response;
        for (let i = 0; i < subject.length; i++) {
          const newTime = line.reduce(
            (acc, cur) =>
              cur.l_subject_name === subject[i].subject_name
                ? acc + cur.l_lapse
                : acc,
            0
          );
          subject[i].total_time = newTime;
        }
        setSubjects(subject);
      });
    }
  };
  const handleRemove = (id) => {
    let body = {
      token: tokenData,
      subject_id: id,
    };
    dispatch(deleteSubject(body)).then((response) => {
      const { isSuccess } = response.payload;
      if (!isSuccess) {
        alert("Error!");
      }
      setSubjects(subjects.filter((element) => element._id !== id));
    });
  };
  const handleAdd = ({ subject_title }, e) => {
    let body = {
      subject_title,
      token: tokenData,
      timeValue: 0,
    };
    dispatch(addSubject(body)).then((response) => {
      const { isSuccess, Study } = response.payload;
      if (isSuccess) {
        setSubjects((subject) => [...subject, Study]);
        e.target.reset();
        clickhandler("add");
      } else {
        alert("Error!");
      }
    });
  };
  const handleEdit = (values) => {
    const { subject_name } = values;
    const { _id } = activeSubject;
    let body = {
      subject_id: _id,
      token: tokenData,
      editSubject_title: subject_name,
    };
    dispatch(editSubject(body)).then((response) => {
      const { isSuccess } = response.payload;
      if (!isSuccess) {
        alert("Error!");
      }
      setSubjects(
        subjects.map((item) =>
          item._id === _id ? { ...item, subject_name } : item
        )
      );
      clickhandler("edit");
    });
  };
  useEffect(() => {
    displaySubject();
  }, []);
  return (
    <SubjectsPresenter
      subjects={subjects}
      clicked={clicked}
      clickhandler={clickhandler}
      activeSubject={activeSubject}
      setActiveSubject={setActiveSubject}
      handleRemove={handleRemove}
      handleAdd={handleAdd}
      handleEdit={handleEdit}
    />
  );
};
export default SubjectsContainer;
