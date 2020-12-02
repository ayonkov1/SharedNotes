import { SET_USER } from "./types";
import Axios from "axios";
// Set the Reducer of User
export const setUser = (data) => async (dispatch) => {
    try {
        dispatch({ type: SET_USER, payload: data })
    } catch (error) {
        console.error(error);
    }
}
// Register a New User
export const Register = (data) => async (dispatch) => {
    try {
       console.log(data);
       const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      let response = await Axios.post("/api/user/register",{
        name:data.SignUp_Name,
        email:data.SignUp_Email,
        password:data.SignUp_Pass
      },config);
      console.log(response);
      if(response.data.token){
        localStorage.setItem("token",response.data.token);
        dispatch({
          type:SET_USER,
          payload:response.data.User
        })
      }
      return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
}
// Login a User
export const Login = (data) => async (dispatch) => {
    try {
       console.log(data);
       const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      let response = await Axios.post("/api/user/login",{
        email:data.SignIn_Email,
        password:data.SignIn_Pass
      },config);
      console.log(response);
      if(response.data.token){
        localStorage.setItem("token",response.data.token);
     await   dispatch({
          type:SET_USER,
          payload:{
           name:"LoggedInUser",
           value:response.data.User
          }
        })
      }
      return response;
    } catch (error) {
        console.error(error);
        return error.response;
    }
}
export const LogOut = () => async (dispatch) =>{
  try {
    localStorage.removeItem("token");
    dispatch({
      type:SET_USER,
      payload:{
        name:"LoggedInUser",
        value:{}
      }
    });
  } catch (error) {
    console.log(error);
  }
}
