import React, { Fragment, useState } from 'react';
import SignInImage  from "../../assets/signin-image.jpg";
import {connect} from "react-redux";
import {setUser,Login } from "../../actions/UserAction";
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";
const SignInForm = ({User:{
    SignIn_Email,SignIn_Pass
},setUser,Login}) => {
    let history = useHistory();
    const onChange = e =>{
        setUser({
            name:e.target.name,
            value:e.target.value
        });
    }
    const onSubmit =async e=>{
        e.preventDefault();
     let response= await Login({
            SignIn_Email,SignIn_Pass
        });

        if(response.data.errors){
            console.log(Object.values(Object.values(response.data)[0])[0]);
                
              Swal.fire({
                icon: 'error',
                title: 'Error Occurred',
                text: Object.values(Object.values(response.data)[0])[0].msg
              })
          }else{
              history.push("/home");
          }  
    }
    return (
        <Fragment>
              <section class="sign-in">
               <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={SignInImage} alt="sign up image"/></figure>
                        <a onClick={()=>{
                            setUser({
                                name:"IsSignIn",
                                value:false
                            });
                        }} class="signup-image-link">Create an account</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign In</h2>
                        <form method="POST" class="register-form" id="login-form" onSubmit={onSubmit}>
                            <div class="form-group">images/signin-image.jpg
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input 
                                    type="text" 
                                    name="SignIn_Email" 
                                    placeholder="Enter Email"
                                    onChange={onChange}
                                />
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input 
                                    type="password" 
                                    name="SignIn_Pass"
                                    placeholder="Enter Password"
                                    onChange={onChange}
                                 />
                            </div>
                           <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                            </div>
                        </form>
                     </div>
                </div>
            </div>
     </section>
    </Fragment>
    )
}
const MapStateToProps = state =>({
    User:state.User
})
export default connect(MapStateToProps,{setUser,Login})(SignInForm);
