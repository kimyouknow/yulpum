//global
const HOME = "/api";
const REGISTER = "/register";
const LOGIN = "/login";
const LOGOUT ="/logout";
const AUTH = "/auth";
const SAVE="/save-subject";
const GETSUBJECT = "/get-subject";
const ADDSUBJECT ="/add-subject";
const SUBJECTDETAIL = "/subject-detail";
const REVISESUBJECT = "/edit-subject";
const DELETESUBEJCT = "/delete-subject";
const GETPLANNER = "/get-planner";
const GETCALENDAR = "/get-calendar";

const routes = {
    //home
    home:HOME,
    register:REGISTER,
    login:LOGIN,
    logout:LOGOUT,
    auth:AUTH,
    //get
    getSubject:GETSUBJECT,
    getPlanner:GETPLANNER,
    getCalendar:GETCALENDAR,
    
    saveStudy:SAVE,
    addSubject:ADDSUBJECT,
    subjectDetail:SUBJECTDETAIL,
    reviseSubject:REVISESUBJECT,
    deleteSubject:DELETESUBEJCT,
 

}

export default routes;