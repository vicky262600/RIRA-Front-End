import React, { useContext } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import styled from 'styled-components';
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Bar = styled.div`
  border: none;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  // flex-direction: column;
  // align-items: center;
  background-color: #1877f2;
  position: sticky;
  top: 0;
  color: white;
`
const Left = styled.div`
flex: 1.2;

`
const Tital = styled.h1`
  margin-left: 20px;
  font-size: 27px;
  font-weight: bold;
  cursor: pointer;
`
  const Center = styled.div`
  align-items: center;
  // background-color: white; 
  // height: 100%;
  display: flex;
  flex: 2.8;
  flex-direction: row;
  justify-content: center;
`
  const Searrchbar = styled.div`
  color: black;
  background-color: white;
  width: 65%;
  border-radius: 15px;
  border: 1px solid white;
  display: flex;
  align-itmes: center;
`
const Input = styled.input`
  border: none;
`
const Heading = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-left: 25px;
`
const Text = styled.p`
  cursor: pointer;
  `
const Right = styled.div`
  flex: 1.2;
  align-items: right;
`
  const Icons = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 20px;
  cursor: pointer;
  justify-content: flex-end;
  `
  const PersonDiv = styled.div`
    position: relative;
    `
    const MessageDiv = styled.div`
    position: relative;
    `
    const NotificationDiv = styled.div`
    position: relative;
    
    `
    const Span = styled.span`
    font-size:12.5px;
    width: 13px;
    height: 13px;
    position: absolute;
    border: none;
    border-radius: 50%;
    background-color: red;
    top: -5px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const Profile = styled.img`
  background-color: white;
  height: 27px;
  width: 27px;
  border-radius: 50%;
  border: 1px solide black;
  // background: url("https://user-images.githubusercontent.com/145147066/272936528-c4072f24-deb4-4cd7-b4b1-2f8e9a9f90d7.jpg");
  background-size: cover;
  `
  
const Topbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Bar>
        <Left>
          <Link to="/" style={{textDecoration:"none", color:"white"}}>
            <Tital>RIRAsocial</Tital>
          </Link>
        </Left>
        <Center>
          <Searrchbar>
            <SearchIcon/>
            <Input placeholder='search' />
          </Searrchbar>
          <Heading>
           <Text>Homepage</Text>
           <Text>Timeline</Text>
          </Heading>
        </Center>
        <Right>
          <Icons>
            <PersonDiv>
              <PersonIcon/>
              <Span>1</Span>
            </PersonDiv>
            <MessageDiv>
              <MessageIcon/>
              <Span>2</Span>
            </MessageDiv>
            <NotificationDiv>
              <NotificationsIcon/>
              <Span>1</Span>
            </NotificationDiv>
            <Link to={`/profile/${user.username}`}>
              <Profile src={user.profilePicture ? user.profilePicture : "https://private-user-images.githubusercontent.com/145147066/286381759-9a40c43c-cbf6-4c07-b4b7-f2a3de7ad214.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMDEwNTIsIm5iZiI6MTcwMTIwMDc1MiwicGF0aCI6Ii8xNDUxNDcwNjYvMjg2MzgxNzU5LTlhNDBjNDNjLWNiZjYtNGMwNy1iNGI3LWYyYTNkZTdhZDIxNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyOFQxOTQ1NTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NjhkYmUxYzc5NjVmMDdkZDJlMzk0YTI1ODY2Y2FlNjA5ZTA0YTMyYjAzNDY0NzRhMzVmMjJhYTY5NTJlYmY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.gHGxuPXzgVSmau_6ow3PiQ_b643r2GaEt0oNbBiB9uM"}/>            
            </Link>
          </Icons>
        </Right>
    </Bar>
  )
}

export default Topbar
