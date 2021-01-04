import {
    SET_USER
} from "../actions/types";


const initialState = {
    SignUp_Name:"",
    SignUp_Email:"",
    SignUp_Pass:"",
    SignUp_ConfirmPass:"",
    IsSignIn:false,
    SignIn_Email:"",
    SignIn_Pass:"",
    LoggedInUser:{}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:{ 
            return {
                ...state,                                                                                                                                                                                                                                                                                                                                                         
            [action.payload.name]:action.payload.value  
            }                                                                                                                                                                                                                                                                                                                                                                                                                                               
        }
        default:
            return state;
    }
};