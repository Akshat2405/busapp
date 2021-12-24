import React from 'react'
import { useState } from 'react';
function SigninPage() {
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    return (
        <>
            <div tabindex="-1" aria-labelledby="signinModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="signinModalLabel">Signin Page</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label"><i className="zmdi zmdi-email"></i> Email address</label>
                            <input type="email" className="form-control" name="email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label"><i className="zmdi zmdi-lock-outline"></i> Password</label>
                            <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default SigninPage
