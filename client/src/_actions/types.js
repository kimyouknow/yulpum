// user_actions에 types들을 관리하는 파일
export const LOGIN_USER = 'login_user';
export const REGISTER_USER = 'register_user';
export const AUTH_USER = 'auth_user';
export const GET_RANK = "getRank";

export const ADD_SUBJECT = 'add_subject';
export const GET_SUBJECTS = 'get_subjects';
export const EDIT_SUBJECTS = "edit_subjects";
export const DELETE_SUBJECTS = "delete_subjects";
export const GET_SUBJECT_TIME = 'get_subect_time';

export const UPDATE_TIMER = 'update_timer';
export const GET_LINE="get_line";

export const GET_CALENDAR = 'get_calendar';
export const ADD_PLAN="add_plan";
export const DELETE_PLAN="delete_plan";

export const SET_TODAY = "setToday";
export const PREV_MONTH = "prevMonth";
export const NEXT_MONTH = "nextMonth";
export const CHANGE_DATE = "changeDate";

export const CREATE_GROUP = "createGroup";
export const ADD_GROUP = "addGroup"; 
export const EXIT_GROUP = "exitGroup";
export const DELETE_GROUP = "deleteGroup";
// const{
//     token,
//     group_id // 삭제할 그룹 아이디
// } = req.body;
export const GET_MY_GROUP = "getMyGroup";
export const FINDGROUP = "findGroup";
// 그룹생성: "/create-group" 
// (유저의)그룹추가(가입): "/add-group";
// (유저의)그룹삭제 "/delete-group";
// (유저의)그룹 보기 = "/get-myGroup";
// 그룹 검색 = "/get-group";
