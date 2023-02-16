import React from 'react'
import '../CSS/Header.css'
import { Link } from 'react-router-dom'

export default function Header() {


    return (


        <div className="header" style={{ height: '300px' }}>

            <div className='conatiner ' style={{ width: "100%" }}>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/upload">Upload</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Download</Link>
                        </li>
                                              
                    </ul>

                   
                </div>
            </nav>
            </div>

            <div className='line'></div>


        </div>
    )
}
