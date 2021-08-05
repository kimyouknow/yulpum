//global
const HOME = "/";
const REGISTER = "/register";
const LOGIN = "/login";
const LOGOUT ="/logout";


//middleware
const AUTH = "/auth";
const API="/api";

//pages
const STATICS = "/statics";
const PLANNER = "/planner";
const RANK = "/rank";
const GROUP ="/group";


const SAVE="/save-subject";
const GETSUBJECT = "/get-subject";
const ADDSUBJECT ="/add-subject";
const SUBJECTDETAIL = "/subject-detail";
const REVISESUBJECT = "/edit-subject";
const DELETESUBJECT = "/delete-subject";
const GETPLANNER = "/get-planner";
const GETCALENDAR = "/get-calendar";
const GETLINE = "/get-line";


const routes = {
    //home
    home:HOME,
    register:REGISTER,
    login:LOGIN,
    logout:LOGOUT,

    //middle 
    auth:AUTH,
    api:API,
    
    //pages
    statics:STATICS,
    planner:PLANNER,
    rank:RANK,
    group:GROUP,

    //get
    getSubject:GETSUBJECT,
    getPlanner:GETPLANNER,
    getCalendar:GETCALENDAR,
    getLine:GETLINE,

    saveStudy:SAVE,
    addSubject:ADDSUBJECT,
    subjectDetail:SUBJECTDETAIL,
    reviseSubject:REVISESUBJECT,
    deleteSubject:DELETESUBJECT,
 

}

export default routes;