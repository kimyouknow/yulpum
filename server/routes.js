//global
const HOME = "/";
const REGISTER = "/register";
const LOGIN = "/login";
const LOGOUT ="/logout";
const WITHDRAWAL ="/out";

//middleware
const AUTH = "/auth";
const API="/api";

//pages
const STATICS = "/statics";
const PLANNER = "/planner";
const RANK = "/rank";
const GROUP ="/group";

//subject
const SAVE="/save-subject";
const GETSUBJECT = "/get-subject";
const ADDSUBJECT ="/add-subject";
const SUBJECTDETAIL = "/subject-detail";
const REVISESUBJECT = "/edit-subject";
const DELETESUBJECT = "/delete-subject";


//todo 
const ADDTODO = "/add-todo";
const DELETETODO = "/delete-todo";


//get something
const GETCALENDAR = "/get-calendar";
const GETLINE = "/get-line";
const GETRANK = "/get-rank";
const GETMYGROUP = "/get-myGroup";
const FINDGROUP = "/get-group";
const GETGROUPDETAIL = "/get-detail";

//group

const ADDGROUP = "/add-group";
// const DELETEGROUP = "/delete-group";
const CREATEGROUP = "/create-group";
const EXITGROUP = "/exit-group"; //그룹멤버가 그룹 나가기


const routes = {
    //home
    home:HOME,
    register:REGISTER,
    login:LOGIN,
    logout:LOGOUT,
    withdrawal:WITHDRAWAL,
    //middle 
    auth:AUTH,
    api:API,
    
    //pages
    statics:STATICS,
    planner:PLANNER,
    rank:RANK,
    group:GROUP,

    //get something
    getSubject:GETSUBJECT,
    getCalendar:GETCALENDAR,
    getLine:GETLINE,
    getRank:GETRANK,
    getMyGroup:GETMYGROUP,
    getGroupDetail:GETGROUPDETAIL,

    //subjec
    saveStudy:SAVE,
    addSubject:ADDSUBJECT,
    subjectDetail:SUBJECTDETAIL,
    reviseSubject:REVISESUBJECT,
    deleteSubject:DELETESUBJECT,
 
    //todo
    addTodo:ADDTODO,
    deleteTodo:DELETETODO,

    //group
    addGroup:ADDGROUP,
    // deleteGroup:DELETEGROUP,
    findGroup:FINDGROUP,
    createGroup:CREATEGROUP,
    exitGroup:EXITGROUP
}

export default routes;