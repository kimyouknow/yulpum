//global
const HOME = "/";
const ACTIVEPAGE = "/active"
const REGISTER = "/api/register";
const LOGIN = "/api/login";
const LOGOUT ="/api/logout";
const AUTH = "/api/auth";
const SAVE="/api/save-subject";
const GETSUBJECT = "/api/get-subject";
const ADDSUBJECT ="/api/add-subject";
const SUBJECTDETAIL = "/api/subject-detail";

const routes = {

    home:HOME,
    register:REGISTER,
    login:LOGIN,
    logout:LOGOUT,
    auth:AUTH,
    getSubject:GETSUBJECT,
    activepage:ACTIVEPAGE,
    saveStudy:SAVE,
    addSubject:ADDSUBJECT,
    subjectDetail:SUBJECTDETAIL
    

}

export default routes;