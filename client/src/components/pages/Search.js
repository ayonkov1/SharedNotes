import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div>

                <div class="page-content p-5" id="content">

                    <h2 class="display-4 text-white">Search</h2>
                    <p class="lead text-white mb-0">Look for a specific question or topic. </p>

                    <div class="separator"></div>
                    <form>
                       <div className="row mb-4">
                           <div className="form-group col-md-9">
                             <input id="exampleFormControlInput5" type="email" placeholder="What're you searching for?" className="form-control form-control-underlined" />
                       </div>
                       <div className="form-group col-md-3">
                           <button type="submit" className="btn btn-primary rounded-pill btn-block shadow-sm">Search</button>
                       </div>
                       </div>
        
                     </form>
                    <div class="row text-white">

                     
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;