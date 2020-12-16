import React, { Component } from 'react'
import Popup from 'reactjs-popup';


class MyProfile extends Component { 

    render() {
        return (
            <div>

                <div class="page-content p-5" id="content">
                    
                        <div class="px-4 pt-0 pb-4 pt-4 mb-4 bg-dark profile-header-opacity rounded">
                            <div class="media align-items-end profile-header">
                                <div class="profile mr-3"><img src={"https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"} alt="..." width="130" class="rounded-circle mb-2 img-thumbnail" /></div>
                                <div class="media-body mb-4 ml-2 text-white">
                                    <h4 class="mt-0 mb-0">Manuella Tarly</h4>
                                    <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i>Eindhoven</p>
                                    <a href="#" class="btn btn-dark btn-sm">Choose a profile picture</a>
                                </div>
                                <div class="p-4 d-flex justify-content-end text-center text-white">
                                    <ul class="list-inline mb-0">
                                        <li class="list-inline-item">
                                            <h5 class="font-weight-bold mb-0 d-block">0</h5><small class="text-muted"> <i class="fa fa-picture-o mr-1"></i>Likes</small>
                                        </li>
                                        <li class="list-inline-item">
                                            <h5 class="font-weight-bold mb-0 d-block">0</h5><small class="text-muted"> <i class="fa fa-user-circle-o mr-1"></i>Questions</small>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                              
                        <Popup trigger={<button className="btn btn-primary btn-lg ">Create a new question </button>}
                         position="center center" 
                         closeOnEscape 
                         modal>
                            <span><div class="bg-white shadow rounded overflow-hidden px-4 mt-2">
                               <form action method="POST">
        
                              <div className="form-group">
                                 <h5 class="card-title">Create a new question</h5>
                                 <label htmlFor="title">Title <span className="require">*</span></label>
                                 <input type="text" className="form-control" name="title" />
                              </div>
                              <div className="form-group">
                                 <label htmlFor="description">Description</label>
                                 <textarea rows={2} className="form-control" name="description" defaultValue={""} />
                              </div>
                              <div className="form-group">
                                  <p><span className="require">*</span> - required fields</p>
                              </div>
                              <div className="form-group">
                                 <button type="submit" className="btn btn-primary">
                                     Post
                                 </button>
                              </div>
                           </form>
                          </div></span>
                        </Popup>
                        
                    

                      

                    <div class="bg-shadow rounded overflow-hidden">

                        <div class="py-4 px-0">
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
                            <div class="row py-4">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProfile;
