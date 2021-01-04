import {
    SET_QUESTION
} from "../actions/types";


const initialState = {
    title:"",
    description:"",
    UserQuestions:[],
    Questions:[],
    TotalLikes:0,
    TotalQuestions:0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTION:{ 
            return {
                ...state,                                                                                                                                                                                                                                                                                                                                                         
            [action.payload.name]:action.payload.value  
            }                                                                                                                                                                                                                                                                                                                                                                                                                                               
        }
        default:
            return state;
    }
};