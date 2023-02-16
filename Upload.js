import React from 'react'
import { useRef} from 'react'
import axios from 'axios';


export default function Upload() {

    var x1 = useRef();
    

    function between(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min
        )
      }

    var myfunc = (event)=>{

        event.preventDefault();

        if(x1.current.files[0]===undefined){
            alert('File Required');
        }
        else{
           
            const data ={
                "file": x1.current.files[0],
                "password":between(100000,1000000)
            }

            console.log("data",data);

            const url = "http://localhost:9000/file"

            axios.post(url, data)
                .then((res) => {
                    alert("File uploaded Successfully Please save the password `${data.password}`")
                })


        }

    }

    return (
        <div className='container' >
            <h1 style={{margineLeft: "30px"}}>Upload A file</h1>
             <br />
            <input type="file" ref={x1} className='form-control' style={{margineLeft: "30px"}} required /> <br />
            <button style={{margineLeft: "50px"}} onClick={myfunc} >Upload</button>
        </div>
    )
}
