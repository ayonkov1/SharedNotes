import React, { Fragment, useEffect } from 'react';
import './css/Auth.css';
import SignUp from './SignUpForm';
import SignIn from './SignInForm';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
const Auth = ({ User: { IsSignIn } }) => {
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      history.push('/home');
    }
  }, []);
  return (
    <Fragment>
      <div class='flip-card'>
        <div
          class='flip-card-inner'
          style={{ transform: IsSignIn ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          <div class='flip-card-front'>
            <SignUp />
          </div>
          <div class='flip-card-back'>
            <SignIn />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const MapStateToProps = (state) => ({
  User: state.User,
});
export default connect(MapStateToProps, {})(Auth);
