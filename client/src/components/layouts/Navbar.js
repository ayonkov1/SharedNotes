import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <>
            <div class="vertical-nav bg-white" id="sidebar">
                <div class="py-4 px-3 mb-4 bg-light">
                    <div class="media d-flex align-items-center">
                        <div class="media-body">
                            <h4 class="m-0">John Doe</h4>
                        </div>
                    </div>
                </div>

                <ul class="nav flex-column bg-white mb-0">
                    <li class="nav-item">
                        <Link to="/profile" class="nav-link text-dark font-italic">
                            <i class="fas fa-user mr-3 text-primary fa-fw"></i>
                        My Profile
                    </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/home" class="nav-link text-dark font-italic">
                            <i class="fas fa-home mr-3 text-primary fa-fw"></i>
                        Home
                    </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/error" class="nav-link text-dark font-italic">
                            <i class="fas fa-bell mr-3 text-primary fa-fw"></i>
                        Notifications
                    </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/error" class="nav-link text-dark font-italic">
                            <i class="fas fa-search mr-3 text-primary fa-fw"></i>
                        Search
                    </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/activity" class="nav-link text-dark font-italic">
                            <i class="fas fa-heartbeat mr-3 text-primary fa-fw"></i>
                        My Activity
                    </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/bookmarks" class="nav-link text-dark font-italic">
                            <i class="fas fa-bookmark mr-3 text-primary fa-fw"></i>
                        Bookmarks
                    </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;
