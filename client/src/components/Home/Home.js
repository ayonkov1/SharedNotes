import React, { Fragment } from 'react'
import {connect} from "react-redux";
import {LogOut} from "../../actions/UserAction";
import {useHistory} from "react-router-dom";

const Home = ({LogOut}) => {
    let history = useHistory();
    return (
        <Fragment>
          <input 
             type="button"
             name="signin"
             id="signin"
             className="form-submit"
             value="Log Out"
             onClick={()=>{
                 LogOut();
                 history.push("/")
                }
            }
             />
        </Fragment>
    )
}

export default connect(null,{LogOut})(Home);
