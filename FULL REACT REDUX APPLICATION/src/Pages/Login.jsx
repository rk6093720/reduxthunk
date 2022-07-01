import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../Redux/Auth/action';
const Login = () => {
              const [email, setEmail ] = useState("eve.holt@reqres.in");
              const [password, setPassword ] = useState("");
              const dispatch = useDispatch();
              const navigate= useNavigate();
              const location = useLocation();
              const comingfrom = location.state?.from?.pathname || '/';
             console.log("inside login page", location)
   const handleSubmit = (e) => {
    e.preventDefault();
        if(email && password )
        {
          dispatch(login({email, password})).then((r) => {
            if(r.type === "USER_LOGIN_SUCCESS")
            {
            navigate(comingfrom, { replace: true});
            }
          });
        };
   }
 return (
    <LoginWrapper>
      <form onSubmit={ handleSubmit } >
      <div>
          <label >User Email</label>
          <input type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"/>
        </div>
        <div>
          <label >User Password</label>
          <input type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           placeholder="enter your password"
            />
        </div>
             <button type='submit'>LOGIN</button>
      </form>
    </LoginWrapper>
  )
}

export default Login;

const LoginWrapper = styled.div`
display:flex;
width:300px;
flex-direction:column;
align-items:center;
margin:auto;
`
