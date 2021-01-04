import React,{Fragment,useState} from 'react'
import SignUpImage  from "../../assets/signup-image.jpg";
import {connect} from "react-redux";
import {setUser,Register } from "../../actions/UserAction";
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";
const SignUpForm = ({
    User:{
        SignUp_Name,
        SignUp_Email,
        SignUp_Pass,
        SignUp_ConfirmPass
    },
    setUser,Register
}) => {
    let history = useHistory();
    const onChange=e=>{
        setUser({
            name:e.target.name,
            value:e.target.value
        })
    }
    const onSubmit =async e =>{
        e.preventDefault();
        if(SignUp_Pass!==SignUp_ConfirmPass){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match '
              });
              return;
        }
   let response=await Register({
            SignUp_Name,
            SignUp_Email,
            SignUp_Pass,
            SignUp_ConfirmPass
        });
     if(response){
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
  
        

    }
    return (
        <Fragment>
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form" onSubmit={onSubmit}>
                            <div className="form-group">
                                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="SignUp_Name"  placeholder="Your Name" onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="SignUp_Email"  placeholder="Your Email" onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="SignUp_Pass"  placeholder="Password" onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="SignUp_ConfirmPass"  placeholder="Repeat your password" onChange={onChange}/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={SignUpImage} alt="sing up image"/></figure>
                        <a className="signup-image-link" onClick={()=>{
                            setUser({
                                name:"IsSignIn",
                                value:true
                            })
                        }}>I am already member</a>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
}
const MapStateToProps = state =>({
    User:state.User
});
export default connect(MapStateToProps,{setUser,Register})(SignUpForm);
