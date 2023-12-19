import React, { useContext, useRef } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { loginCall } from '../apiCalls'
import {AuthContext} from '../context/AuthContext'
import CircularProgress from '@mui/material/CircularProgress';


const Loginn = styled.div`
  height: 100vh;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: lightpink;
`
const Card = styled.div`
  width: 50%;
  min-height: 570px;
  border-radius: 10px;
  display: flex;
  justify-contant: center;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background: linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url("https://user-images.githubusercontent.com/145147066/268987809-8fb06638-9e8c-4a7a-9441-c8b84f9aede4.jpeg");
  background-size: cover;
  color: white;
  padding: 40px;
  gap: 30px;
`
const Title = styled.div`
  font-size: 75px;
  `
  const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  `
  
  const Disc = styled.p`
  
  `
  const Spam = styled.span`
  font-size: 14px;
  padding-bottom: 15px; 
  cursor: pointer;
  `
  const Button = styled.button`
  border: none;
  width: 50%;
  padding: 10px;
  color: purple;
  backgorund-color: white;
  cursor: pointer;
  font-weight: bold;  
  `
  const Right = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: white;
  justify-content: center;
  gap: 50px;
`
const LoginTitle = styled.h1`
  color: #555;
  `
  const Input = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 20px;
  `
  const Buttonlogin = styled.button`
  width: 50%;
  padding: 10px;
  color: purple;
  border: none;
  background-color: #938eef;
  cursor: pointer;
  font-weight: bold; 
`

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) =>{
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value}, dispatch);
  };

  console.log(user);

  return (
    <Loginn>
        <Card>
        <Left>
            <Title><b>RIRA.</b></Title>
            <Text>
              <Disc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia! Soluta fugiat ad rerum aperiam possimus sunt ex corporis obcaecati dolores hic quos, accusamus ea exercitationem saepe earum blanditiis minus! </Disc>
              <Spam>Do not have an account?</Spam>
              {/* react router established */}
              {/* <Link to="/register"> */}
                <Button>Register</Button>
              {/* </Link> */}
            </Text>
        </Left>
        <Right onSubmit={handleClick}>
            <LoginTitle>Login</LoginTitle>
            <Input type='email' placeholder= "Email" ref={email} required/>
            <Input type='password' placeholder= "Password" ref={password} required minLength="6"/>
            <Buttonlogin>{isFetching ? <CircularProgress size="12px"/> : "Login"}</Buttonlogin>
        </Right>
        </Card>
    </Loginn>
  )
}

export default Login