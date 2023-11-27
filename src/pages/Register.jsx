import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Loginn = styled.div`
  height: 100vh;
  display: flex;
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
  background-color: white;
  flex: 1;
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
  const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 40px;
  justify-content: center;
  gap: 50px;
  background: linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url("https://user-images.githubusercontent.com/145147066/269408179-6737fb80-f3b8-433e-ab97-b45d131e8f8c.jpeg");
  background-size: cover;
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

const Register = () => {
  return (
    <Loginn>
        <Card>
        <Left>
            <LoginTitle>Register</LoginTitle>
            <Input type='text' placeholder= "Username" />
            <Input type='email' placeholder= "Email" />
            <Input type='password' placeholder= "password" />
            <Input type='text' placeholder= "Name" />
            <Buttonlogin>Register</Buttonlogin>
        </Left>
        <Right>
            
            <Title><b>RIRA.</b></Title>
            <Text>
              <Disc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia! Soluta fugiat ad rerum aperiam possimus sunt ex corporis obcaecati dolores hic quos, accusamus ea exercitationem saepe earum blanditiis minus! </Disc>
              <Spam>Do you have an account?</Spam>
              {/* react router established */}
              {/* <Link to="/login"> */}
                <Button>Login</Button>
              {/* </Link> */}
            </Text>
        </Right>
        </Card>
    </Loginn>
  )
}

export default Register