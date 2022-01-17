import React from 'react'
import { useState } from 'react';

function Signup() {
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        gender:"",
        password:"",
        cpassword:""
    });
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    return (
        <>
            <div className="modal" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="signupModalLabel">Signup Page</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label"><i className="zmdi zmdi-account-add"></i> Name</label>
                        <input type="text" className="form-control" value={user.name}  onChange={handleInputs} name="name" id="name" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"><i className="zmdi zmdi-email"></i> Email address</label>
                        <input type="email" className="form-control" value={user.email}  onChange={handleInputs} name="email" id="email" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label"><i className="zmdi zmdi-smartphone-android"></i> Phone Number</label>
                        <input type="text" className="form-control" value={user.phone}  onChange={handleInputs} name="phone" id="phone" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"><i className="zmdi zmdi-label-alt-outline"></i> Gender</label>
                        <input type="text" className="form-control" value={user.gender}  onChange={handleInputs} name="gender" id="gender" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><i className="zmdi zmdi-lock-outline"></i> Password</label>
                        <input type="password" className="form-control" value={user.password}  onChange={handleInputs} name="password" id="password"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><i className="zmdi zmdi-lock-outline"></i> Confirm password</label>
                        <input type="password" className="form-control" value={user.cpassword}  onChange={handleInputs} name="cpassword" id="cpassword"/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-success">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Signup
