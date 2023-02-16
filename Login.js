import React from 'react'
import '../CSS/login.css'
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

export default function Login() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const SigninUser = (event) => {

        event.preventDefault();

        if(Email.length === 0)
            alert('Please Enter Email ID');
        else if (Password.length === 0)
            alert('Please Enter password');
        else{
            const url= "http://localhost:9000/login"

            const data={ "email" : Email,
                         "password" : Password
                        }

            console.log(data);

             axios.post(url,data)
            .then((res) => {
                    console.log(res.data);
                    const result = res.data;
                    console.log(result);

                    if(result=="Invalid user"){
                        alert('Invalid Mail Id or Password')
                    }
                    else{
                        alert('Login Successfully');                       
                    }
            })


        }

    }

    return (
        <div className="custlogin" style={{ height: '600px' }}>
            <div className='container '>
                <h1 className="head"> <b>Login</b> </h1>
                <div className="row">
                    <div className="column" >
                        <form onSubmit={SigninUser} >

                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label" style={{ color: 'grey' }}><h5>Email Id</h5></label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => { setEmail(event.target.value) }} />

                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" class="form-label" style={{ color: 'grey' }}><h6>Password</h6></label>
                                <input type="password" class="form-control" id="exampleInputPassword1" onChange={(event) => { setPassword(event.target.value) }} />
                            </div>


                            <div className="d-flex flex-column bd-highlight mb-3">
                                <button className="loginbtn btn" style={{ color: 'black' }}
                                    variant="outline-light" size="lg" type="submit" >
                                    <b>SignIn</b>
                                </button>



                                <Link to="/registration" >
                                    <button className="loginbtn btn" style={{ color: 'Blue', marginLeft: '60px' }} ><b>Register ?</b></button>
                                </Link>

                               </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
