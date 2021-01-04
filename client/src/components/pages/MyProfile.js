import React, { Component,Fragment, useState,useEffect } from 'react'
import Popup from 'reactjs-popup';
import {connect} from "react-redux";
import {LogOut} from "../../actions/UserAction";
import {useHistory} from "react-router-dom";
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import {
    setQuestion,
    addQuestion,
    getUserQuestions,
    LikeUserQuestion,
    UnLikeUserQuestion,
    getTotalLikes,
} from "../../actions/QuestionAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
const MyProfile = ({Question:{
    title,
    description,
    UserQuestions,
    TotalLikes,
},
User:{LoggedInUser},
LogOut,setQuestion,
addQuestion,
getUserQuestions,
LikeUserQuestion,
UnLikeUserQuestion,
getTotalLikes,
}) => {
    let history = useHistory();
    const onQuestionChange=e=>{
        setQuestion({
            name:e.target.name,
            value:e.target.value
        });
    }

    const [TitleError, setTitleError] = useState(false);
    useEffect(() => {
        getUserQuestions();
        getTotalLikes();
    }, []);


    return (
    <Fragment>
        <Navbar /> 
             <div>

                <div class="page-content p-5" id="content">
                
                        <div class="px-4 pt-0 pb-4 pt-4 mb-4 bg-dark profile-header-opacity rounded">
                            <div class="media align-items-end profile-header">
                                <div class="profile mr-3"><img src={"https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"} alt="..." width="130" class="rounded-circle mb-2 img-thumbnail" /></div>
                                <div class="media-body mb-4 ml-2 text-white">
                                    <h4 class="mt-0 mb-0">{LoggedInUser&&LoggedInUser.name}</h4>
                                    <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i>Eindhoven</p>
                                    <a href="#" class="btn btn-dark btn-sm">Choose a profile picture</a>
                                </div>
                                <div class="p-4 d-flex justify-content-end text-center text-white">
                                    <ul class="list-inline mb-0">
                                        <li class="list-inline-item">
                                            <h5 class="font-weight-bold mb-0 d-block">
                                                {TotalLikes}
                                            </h5><small class="text-muted"> <i class="fa fa-picture-o mr-1"></i>Likes</small>
                                        </li>
                                        <li class="list-inline-item">
                                            <h5 class="font-weight-bold mb-0 d-block">
                                            {UserQuestions.length}    
                                            </h5><small class="text-muted"> <i class="fa fa-user-circle-o mr-1"></i>Questions</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                              
                        <Popup 
                        trigger={<button className="btn btn-primary btn-lg "
                        id="newQuestion"
                        >Create a new question </button>}
                         position="center center" 
                         closeOnEscape 
                         modal>
                            {close => (
                                <Fragment>
                            <span><div class="bg-white shadow rounded overflow-hidden px-4 mt-2">
                               <form action method="POST">
                               <h5 class="card-title">Create a new question</h5>

                              
                              <div className="form-group pt-2">
                                 <label htmlFor="title" className="form-label">Title <span className="require">*</span></label>
                                 <input type="text" className="form-control" name="title"
                                 onChange={(e)=>{
                                     onQuestionChange(e);
                                     setTitleError(false);
                                    }
                                }
                                 />
                             {
                            TitleError&&    <Fragment>
                              <small className="TitleError">Title is required </small>
                            </Fragment>    
                               }</div>
                              <div className="form-group pt-2">
                                 <label htmlFor="description" className="form-label">Description</label>
                                 <textarea rows={2} className="form-control" 
                                 name="description" defaultValue={""}
                                 onChange={onQuestionChange}
                                 />
                              </div>
                              <div className="form-group">
                                  <p><span className="require">*</span> - required fields</p>
                              </div>
                              <div className="form-group py-2">
                                 <button type="submit" className="btn btn-primary" onClick={(e)=>{
                                     e.preventDefault();
                                     if(title.toString().trim()===""){
                                        setTitleError(true);
                                        return;
                                     }
                                     addQuestion({
                                         title,
                                         description
                                     })
                                    close();
                          

                                 }}>
                                     Post
                                 </button>
                              </div>
                           </form>
                          </div></span>
                                </Fragment>
                            )}

                        </Popup>
                        
                    <div class="bg-shadow rounded overflow-hidden">
                    <div class="py-4 px-0">
                                    <div class="row">
                        {
                         
                           
                                    UserQuestions.map((question)=>{
                                return    <Fragment>
                                         <div class="col-sm-6 mt-3">
                                            <div class="card">
                                               <div class="card-body">
                                                   <h5 class="card-title">{question.title}</h5>
                                                      <p class="card-text">{question.description}</p>
                                                 <div>
                                             </div>
                                             <span class="badge badge-primary Likes p-2 mx-2">
                                               {question.liked.length} &nbsp; <FontAwesomeIcon icon={faThumbsUp} />
                                             </span>
                                             {
                                                 question.liked.includes(LoggedInUser._id)?
                                                 <button class="btn btn-danger btn-sm" 
                                                 onClick={()=>{
                                                    UnLikeUserQuestion({QuestionId:question._id});
                                                 }}
                                                 
                                                 >UnLike</button> 
                                                         :
                                                 <button class="btn btn-primary btn-sm" 
                                                 onClick={()=>{
                                                    LikeUserQuestion({QuestionId:question._id});
                                                 }}
                                                 
                                                 >Like</button>
                                             }
                                             

                                                      <button type="button" class="btn btn-link">Comment</button>
                                                       <a href="#" class="btn btn-light btn-sm float-right">
                                                       <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                                                          <path fillRule="evenodd" d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                                                            <path fillRule="evenodd" d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                                                       </svg>
                                                                         </a>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                     
                                                 
                                                
                                                        </Fragment>
                            
                            })
                       
                   
                        }
                            </div>
                                                    </div>
                    </div>
                    <button type="button" class="form-submit" onClick={()=>{
                 LogOut();
                 history.push("/")
                }}> Log out</button>
                    
                </div>
            </div>

        
        <Footer />
    </Fragment>
        )



    
}
const MapStateToProps  =state=>({
    Question:state.Question,
    User:state.User
})
export default connect(MapStateToProps,{
    LogOut,
    setQuestion,
    addQuestion,
    getUserQuestions,
    LikeUserQuestion,
    UnLikeUserQuestion,
    getTotalLikes,
})(MyProfile);