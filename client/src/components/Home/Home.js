import React, { Component } from 'react'
import {connect} from "react-redux";
import {LogOut} from "../../actions/UserAction";
import {useHistory} from "react-router-dom";
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Home = ({LogOut}) => {
    let history = useHistory();
    return (
        <>
        <Navbar /> 
        
        <div>
                   

                <div class="page-content p-5" id="content">

                    

                    <h2 class="display-4 text-white">Home</h2>
                    <p class="lead text-white mb-0">Find out what people are searching for. Comment and like to help people find the right answers and level up.</p>
                     
                    <div class="row text-white float-center pt-4">
                       <div className="form-group col-md-3">
                           <button  className="btn btn-primary rounded-pill btn-block shadow-sm active">All</button>
                       </div>  

                       <div className="form-group col-md-3">
                           <button  className="btn btn-primary rounded-pill btn-block shadow-sm">Most liked</button>
                       </div>
                       <div className="form-group col-md-3">
                           <button  className="btn btn-primary rounded-pill btn-block shadow-sm">Newest</button>
                       </div>
                       <div className="form-group col-md-3">
                           <button  className="btn btn-primary rounded-pill btn-block shadow-sm">Refresh</button>
                       </div>

              </div>  
                  <div class="separator"></div>
                  
                 <div class="bg-shadow rounded overflow-hidden">
                  
                        
                    
                        <div class="py-4 ">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Question title</h5>
                                            <p class="card-text">Question description.</p>
                                              <a href="#" class="btn btn-primary btn-sm">Like</a> 
                                              <button type="button" class="btn btn-link">Comment</button>
                                              <a href="#" class="btn btn-light btn-sm float-right"> <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                                                <path fillRule="evenodd" d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                                                </svg></a>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Question title</h5>
                                            <p class="card-text">Question description.</p>
                                              <a href="#" class="btn btn-primary btn-sm">Like</a> 
                                              <button type="button" class="btn btn-link">Comment</button>
                                              <a href="#" class="btn btn-light btn-sm float-right"> <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                                                <path fillRule="evenodd" d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                                                </svg></a>
                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row py-4 ">
                                <div class="col-sm-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Question title</h5>
                                            <p class="card-text">Question description.</p>
                                              <a href="#" class="btn btn-primary btn-sm">Like</a> 
                                              <button type="button" class="btn btn-link">Comment</button>
                                              <a href="#" class="btn btn-light btn-sm float-right"> <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                                                <path fillRule="evenodd" d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                                                </svg></a>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Question title</h5>
                                            <p class="card-text">Question description.</p>
                                              <a href="#" class="btn btn-primary btn-sm">Like</a> 
                                              <button type="button" class="btn btn-link">Comment</button>
                                              <a href="#" class="btn btn-light btn-sm float-right"> <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                                                <path fillRule="evenodd" d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                                                </svg></a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row py-4 ">
                               <div class="col-sm-6">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Question title</h5>
                                            <p class="card-text">Question description.</p>
                                              <a href="#" class="btn btn-primary btn-sm">Like</a> 
                                              <button type="button" class="btn btn-link">Comment</button>
                                              <a href="#" class="btn btn-light btn-sm float-right"> <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                                                <path fillRule="evenodd" d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                                                </svg></a>
                                            
                                        </div>
                                    </div>
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
        </>
        )


        
    
}

export default connect(null,{LogOut})(Home);
