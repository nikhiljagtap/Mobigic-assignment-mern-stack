import React from 'react'
import { useRef, useState } from 'react'
import { Navigate, useNavigate} from 'react-router-dom'
import axios from 'axios';

export default function Registration() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')

    let navigate = useNavigate() ;

    let name = useRef();
    let email = useRef();
    let password = useRef();
   
    const re1 = /^[A-Za-z\s]+$/;
    let res1 = re1.test(Name);

    const re2 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let res2 = re2.test(Email);

    const myfunc = (e) => {

        e.preventDefault();

        if (!res1) {
            alert('Invalid Name')
        }
        else if (!res2) {
            alert('Invalid Email')
        }
        else if (password.length < 6 || password.length > 10) {
            alert('Password length should be more than 6 and less than 10')
        }
        else {

            var obj = {
                name: name.current.value,
                email: email.current.value,
                password: password.current.value
            }

            console.log(obj);

            const url = "http://localhost:9000/user/register"

            axios.post(url, obj)
                .then((res) => {
                    alert("Your account created Successfully")
                    navigate("/");
                })
        }
    }

    return (
        <div className="ureg" style={{ height: '650px' }}>

            <h1 style={{ textAlign: "left", color: "red", textShadow: "yellowgreen 2px 2px",marginLeft: "50px" }}>Registration</h1>

            <div className="row" style={{ marginLeft: "50px", marginTop: "20px", width: "50%" }}>
                <div className="column" >
                    <form onSubmit={myfunc} >

                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label"><h5>Name</h5></label>
                            <input type="text" class="form-control" ref={name} onChange={(e) => {
                                setName(e.target.value)
                            }} placeholder='Name' required />

                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label"><h5>Email Id</h5></label>
                            <input type="email" class="form-control" ref={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} placeholder='email' required />

                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label"><h5>Password</h5></label>
                            <input type="Password" class="form-control" ref={password}
                                placeholder='password' required />
                        </div>



                        <div className="d-flex flex-column bd-highlight mb-3">
                            <div class="col-md-6"><button type="submit" class="btn btn-dark btn-lg">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )

}
