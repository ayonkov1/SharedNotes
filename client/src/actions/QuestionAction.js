import Axios from "axios";
import { SET_QUESTION } from "./types";

// Set the Question Reducer
export const setQuestion = (data) => async (dispatch) => {
    try {
        dispatch({ type: SET_QUESTION, payload: data })
    } catch (error) {
        console.error(error);
    }
}
// User adds a Question
export const addQuestion = (data) => async (dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-auth-token":localStorage.getItem("token")
            },
          };
        let response  = await Axios.post("/api/question/addQuestion",{
            title:data.title,
            description:data.description

        },config);
        console.log(response);
        dispatch({ type: SET_QUESTION, payload: data });

        let Userresponse  = await Axios.get("/api/question/UserQuestions",config);
        console.log(Userresponse);
        dispatch({ type: SET_QUESTION, payload: {
            name:"UserQuestions",
            value:Userresponse.data.questions
        } });
    } catch (error) {
        console.error(error);
    }
}
// List of Specifc Users Questions
export const getUserQuestions = (data) => async (dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-auth-token":localStorage.getItem("token")
            },
          };
        let response  = await Axios.get("/api/question/UserQuestions",config);
        console.log(response);
        dispatch({ type: SET_QUESTION, payload: {
            name:"UserQuestions",
            value:response.data.questions
        } });
    } catch (error) {
        console.error(error);
    }
}
// Like a Question
export const LikeUserQuestion = (data) => async (dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-auth-token":localStorage.getItem("token")
            },
          };
        let response  = await Axios.post("/api/question/LikeUserQuestions",{
            QuestionId:data.QuestionId
        },config);
        console.log(response);
        let UserQuestion_Response  = await Axios.get("/api/question/UserQuestions",config);
        console.log(response);
        dispatch({ type: SET_QUESTION, payload: {
            name:"UserQuestions",
            value:UserQuestion_Response.data.questions
        } });
        let Likesresponse  = await Axios.get("/api/question/getTotalLikes",config);
        console.log(Likesresponse);
        dispatch({
            type:SET_QUESTION,
            payload:{
                name:"TotalLikes",
                value:Likesresponse.data.userLikes
            }
            
        });
    } catch (error) {
        console.error(error);
    }
}

// UnLike a Question
export const UnLikeUserQuestion = (data) => async (dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-auth-token":localStorage.getItem("token")
            },
          };
        let response  = await Axios.post("/api/question/UnLikeUserQuestions",{
            QuestionId:data.QuestionId
        },config);
        console.log(response);
        let UserQuestion_Response  = await Axios.get("/api/question/UserQuestions",config);
        console.log(response);
        dispatch({ type: SET_QUESTION, payload: {
            name:"UserQuestions",
            value:UserQuestion_Response.data.questions
        } });
        let Likesresponse  = await Axios.get("/api/question/getTotalLikes",config);
        console.log(Likesresponse);
        dispatch({
            type:SET_QUESTION,
            payload:{
                name:"TotalLikes",
                value:Likesresponse.data.userLikes
            }
            
        });
    } catch (error) {
        console.error(error);
    }
}

export const getQuestions = (data) => async (dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-auth-token":localStorage.getItem("token")
            },
          };
        let response  = await Axios.get("/api/question/Questions",config);
        console.log(response);
        dispatch({ type: SET_QUESTION, payload: {
            name:"Questions",
            value:response.data.questions
        } });
    } catch (error) {
        console.error(error);
    }
}

// Like a Question
export const LikeQuestion = (data) => async (dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-auth-token":localStorage.getItem("token")
            },
          };
        let response  = await Axios.post("/api/question/LikeUserQuestions",{
            QuestionId:data.QuestionId
        },config);
        console.log(response);
        let QuestionResponse  = await Axios.get("/api/question/Questions",config);
        console.log(response);
        dispatch({ type: SET_QUESTION, payload: {
            name:"Questions",
            value:QuestionResponse.data.questions
        } });

        let Likesresponse  = await Axios.get("/api/question/getTotalLikes",config);
        console.log(Likesresponse);
        dispatch({
            type:SET_QUESTION,
            payload:{
                name:"TotalLikes",
                value:Likesresponse.data.userLikes
            }
            
        });
    } catch (error) {
        console.error(error);
    }
}

// UnLike a Question
export const UnLikeQuestion = (data) => async (dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-auth-token":localStorage.getItem("token")
            },
          };
        let response  = await Axios.post("/api/question/UnLikeUserQuestions",{
            QuestionId:data.QuestionId
        },config);
        console.log(response);
        let Question_Response  = await Axios.get("/api/question/Questions",config);
        console.log(response);
        dispatch({ type: SET_QUESTION, payload: {
            name:"Questions",
            value:Question_Response.data.questions
        } });

        let Likesresponse  = await Axios.get("/api/question/getTotalLikes",config);
        console.log(Likesresponse);
        dispatch({
            type:SET_QUESTION,
            payload:{
                name:"TotalLikes",
                value:Likesresponse.data.userLikes
            }
            
        });

    } catch (error) {
        console.error(error);
    }
}


// get Total Question
export const getTotalLikes = (data) => async (dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-auth-token":localStorage.getItem("token")
            },
          };
        let response  = await Axios.get("/api/question/getTotalLikes",config);
        console.log(response);
        dispatch({
            type:SET_QUESTION,
            payload:{
                name:"TotalLikes",
                value:response.data.userLikes
            }
            
        });

    } catch (error) {
        console.error(error);
    }
}
