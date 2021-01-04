
import { combineReducers } from "redux";
import Question from "./Question";
import User from "./User";


export default combineReducers({
    User:User,
    Question:Question
});
