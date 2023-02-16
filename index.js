import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Header';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Upload from './Components/Upload';


var record=(
  <div>
    <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Login />}/> 
              <Route path="/registration" element={<Registration />}/> 
              <Route path="/upload" element={<Upload />}/>  
            </Routes>  
    </BrowserRouter>
  </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(record
);


