import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="container-fluid mt-0">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-primary bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" style={{'color':'green'}} id="top_navbar" to="/">Navbar</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <NavLink className="nav-link"  to="/home" style={{'color':'green'}} activeStyle={{fontWeight: "bold"}} >Home</NavLink>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                <button type="button" className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#signinModal" id="btn">
                                Signin
                                </button>
                                <button type="button" className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#signupModal" id="btn">
                                Signup
                                </button>
                                </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
