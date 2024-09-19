import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { usersignup, ResetClear } from '../../actions/userAction';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {loading,error,success,message}=useSelector(state=>state.users)

 

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    avtar: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avtar') {
      setInputValue(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setInputValue(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue)
    dispatch(usersignup(inputValue));
  };

  useEffect(() => {
    if (error) {
      toast.error(error); // Display error toast
      dispatch(ResetClear());
    }
    if (success) {
      toast.success(message); // Display success toast
      navigate("/login");
    }
  }, [dispatch, navigate, error, success, message,toast]);

  return (
    <div className='container-sm border p-5'>
      <form onSubmit={handleSubmit}>
        <div className='form-floating mb-3'>
          <input
            type="email"
            className='form-control'
            name='email'
            onChange={handleChange}
            id='floating-input'
            placeholder="nameexample@gmail.com"
            required
          />
          <label htmlFor='floating-input'>Email</label>
        </div>

        <div className='form-floating mb-3'>
          <input
            type='password'
            className='form-control'
            name='password'
            onChange={handleChange}
            id='password-input'
            placeholder="password"
            required
          />
          <label htmlFor='password-input'>Password</label>
        </div>

        <div className='mb-3'>
          <label htmlFor='avatar-input' className='form-label'>Avatar</label>
          <input
            type='file'
            className='form-control'
            id='avatar-input'
            name='avtar'
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        <button type='submit' className='btn btn-primary' disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default Signup;
