import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../../api/authApi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useTypedSelector } from '../../../hooks/hooksType';
import './Login.css'

const Login = () => {

  const setToken = useTypedSelector((state) => state.auth);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      setToken(response.data.token);
      navigate('/dashboard/organizations');
    },
    onError: (error) => {
      toast.error(error.response.data.data.message)
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      toast.error('Username and password are required');
      return;
    }
    mutation.mutate({ username: trimmedUsername, password: trimmedPassword });
  };


  return (

    <div className='login-wrap'>
      <div className='left'>
        <img className="img-fluid" src="/src/assets/images/login.svg" alt="Login Cover" />
      </div>
      <div className='right'>
          <div className='form-cover'>
            <div className='content'>
                <h1>Welcome to CVA! 👋</h1>
                <p>Please sign-in to your account and start the adventure</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label>Username</label>
                  <input 
                    id="username" 
                    placeholder="admin" 
                    type="text" 
                    className="form-control" 
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input 
                    id="password" 
                    placeholder="**********" 
                    type="password" 
                    className="form-control" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="btn" type='submit'>Sign in</button>
            </form>
          </div>
      </div>
    </div>
  ) 
}

export default Login