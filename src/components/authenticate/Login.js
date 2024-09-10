import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast } from 'react-toastify';
import {userlogin,resetClear} from "../../actions/userAction"

const Login = () => {
const dispatch = useDispatch();
const navigate = useNavigate();

const {loading,error,success,message}=useSelector(state=>state.user)

console.log(loading,error,success,message)

const [inputValue,setinputValue]=useState({
    email:"",password:""
})

const handleChange=(e)=>{
    const {name,value} = e.target
    setinputValue((prev)=>({...prev,[name]:value}))
}

const handleSubmit=(e)=>{
    e.preventDefault()
    
    dispatch(userlogin(inputValue))
}

useEffect(()=>{
  if(error){
    toast.error(error)
    dispatch(resetClear())
  }
  if(success){
    toast.success(message)
  }
},[dispatch, error, success, message,toast])

  return (
    <div className='container-sm border p-5'>
      <form onSubmit={handleSubmit}>
        <div className='form-floating mb-3'>
            <input type='email' className='form-control' name='email' onChange={handleChange} id='floating-input' placeholder="nameexample@gmail.com" required />
            <label for='floating-input'>Email</label>
        </div>
        <div className='form-floating mb-3'>
            <input type='password' className='form-control' name='password' onChange={handleChange} id='password-input' placeholder="password" required />
            <label for='password-input'>Password</label>
        </div>
        <button type="submit" className='btn btn-primary'>Login</button>
      </form>
    </div>
  )
}

export default Login
