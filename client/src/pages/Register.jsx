import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
    const [data, setData] = useState({
        username:"",
        email:'',
        password:'',
    })
    const registerUser = async (e) =>{
        e.preventDefault()
        const {username, email, password} = data
        try {
          const {data} = await axios.post('/register',{
            username, email, password
          })
          if(data.error) {
            toast.error(data.error)
          } else {
            setData({})
            toast.success("Successfull registerd")
            navigate("/login");
          }
        } catch (error) {
          console.log(error);
        }
    }
  return (
    <div>
      <form onSubmit={registerUser}>
        <label >UserName</label>
        <input type="text" placeholder='Username' value={data.username} onChange={(e)=>setData({...data, username: e.target.value})}/>
        <label >email</label>
        <input type="email" placeholder='Email'value={data.email} onChange={(e)=>setData({...data, email: e.target.value})}/>
        <label >password</label>
        <input type="password" placeholder='Password'value={data.password} onChange={(e)=>setData({...data, password: e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
