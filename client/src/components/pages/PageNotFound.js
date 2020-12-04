import React, { Component } from 'react'

class Error extends Component {
    render() {
        return (
            <div>

                <div class="page-content p-5" id="content">

                    <button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold">Menu</small></button>

                    <h2 class="display-4 text-white">Page Not Found 404</h2>

                </div>
            </div>

        )
    }
}

export default Error;
