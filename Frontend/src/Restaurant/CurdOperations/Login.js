import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [details, setDetails] = useState({});
    const navigate = useNavigate()
    const changeData = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })

    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const { username, password } = details;
      
        
       axios.post(`http://localhost:7071/api/login`, {  username,  password  })
            .then((res) => {
                alert("Login Successfully")
                navigate("/login")
            })
            .catch((err) => {
                 
                console.log("failure")
                alert("login failed! Please try again.");
            })
          }
    return (
        <section className='container p-5 text-center'>
            <div className='row'>
                <div className='col-lg-4 bg-light '>
                    <h1 className='text-center'>Login</h1>

                    <form onSubmit={submitHandler}> 
                        <input type="text" name='username' className="form-control mb-3" id="floatingFirst" onChange={changeData} placeholder="User Name" />
                        <input type="password" name='password' className="form-control mb-3" id="floatingLast" onChange={changeData} placeholder="Password" />
                        <input type='submit' className='form-control btn btn-success' />
                    </form>
                </div>
                       
            </div>

        </section >
    )
}

export default Login