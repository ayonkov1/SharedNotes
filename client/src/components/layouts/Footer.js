import React from 'react'
import logo from '../imgs/logo.png'

function Footer() {
     const styleLogo = {
       width: "80px",
       height: "60px",
    }
    return (

        <footer class="bg-white">
            <div class="page-content p-5">
                <div class="row py-4">
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <p class="font-italic text-muted">Shared Notes is a platform where you can ask questions and help others. Made by students for students.</p>
                        <img style ={styleLogo} src={logo} alt="Logo" />Millenium Creative
                
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 class="text-uppercase font-weight-bold mb-4">About us</h6>
                        <ul class="list-unstyled mb-0">
                            <li class="mb-2"><a href="#" class="text-muted">Team</a></li>
                            <li class="mb-2"><a href="#" class="text-muted">Contact us</a></li>
                            <li class="mb-2"><a href="#" class="text-muted">Millenium creative</a></li>
                            <li class="mb-2"><a href="#" class="text-muted">Our Blog</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 class="text-uppercase font-weight-bold mb-4">Navigation</h6>
                        <ul class="list-unstyled mb-0">
                            <li class="mb-2"><a href="#" class="text-muted">Logout</a></li>
                            <li class="mb-2"><a href="#" class="text-muted">My profile</a></li>
                            <li class="mb-2"><a href="#" class="text-muted">Home</a></li>
                            <li class="mb-2"><a href="#" class="text-muted">My activity</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-lg-0">
                        <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
                        <p class="text-muted mb-4">Subscribe to our newsletter for our latest updates.</p>
                        <div class="p-1 rounded border">
                            <div class="input-group">
                                <div class="input-group-append">
                                    <button id="button-addon1" type="submit" class="btn btn-link"><i
                                        class="fa fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-light py-4">
                <div class="container text-center">
                    <p class="text-muted mb-0 py-2">© 2020 Millenium Creative All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;