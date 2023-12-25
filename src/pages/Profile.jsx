import React from 'react';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const Profilee = styled.div`
  display: flex;
  // margin-top: 10px;
  // width: 100%;
`
  
const ProfileRight = styled.div`
  flex: 9;
`
const ProfileRightTop = styled.div`

`
const ProfileCover = styled.div`
  height: 320px;
  position: relative;
`
const ProfileCoverphoto = styled.img`
  width: 100%;
  height: 250px;
  object: fit-cover;
`
const ProfileUserphoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  background-color: white;
  // https://user-images.githubusercontent.com/145147066/272936528-c4072f24-deb4-4cd7-b4b1-2f8e9a9f90d7.jpg
  left: 0;
  right: 0;
  top: 150px;
  margin: auto;
  border: 3px solid white;
`
const ProfileRightBottom = styled.div`
  display: flex;
`
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Name = styled.h4`
  font-size: 24px;
  margin: 0;
`
const Span = styled.span`
  font-weight: 300;
  margin: 10px;
`

const Profile = () => {
  const [user, setUser] = useState({});
  const username = useParams().username;
  useEffect(()=>{
    const fetchUser = async()=>{
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data)
    };
    fetchUser();
  }, [username]);

  return (
    <div>
      <Topbar/>
      <Profilee>
        <Sidebar/>
        <ProfileRight>
          <ProfileRightTop>
            <ProfileCover>
              <ProfileCoverphoto src={user.coverPicture || "https://user-images.githubusercontent.com/145147066/277200704-8acbb003-335e-4019-a2fa-37875b942f18.jpeg"}/>
              <ProfileUserphoto src={user.profilePicture || "https://private-user-images.githubusercontent.com/145147066/286381759-9a40c43c-cbf6-4c07-b4b7-f2a3de7ad214.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMDEwNTIsIm5iZiI6MTcwMTIwMDc1MiwicGF0aCI6Ii8xNDUxNDcwNjYvMjg2MzgxNzU5LTlhNDBjNDNjLWNiZjYtNGMwNy1iNGI3LWYyYTNkZTdhZDIxNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyOFQxOTQ1NTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NjhkYmUxYzc5NjVmMDdkZDJlMzk0YTI1ODY2Y2FlNjA5ZTA0YTMyYjAzNDY0NzRhMzVmMjJhYTY5NTJlYmY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.gHGxuPXzgVSmau_6ow3PiQ_b643r2GaEt0oNbBiB9uM"}/>  
            </ProfileCover> 
            <ProfileInfo>
              <Name>{user.username}</Name>
              <Span>{user.desc}</Span>
            </ProfileInfo>
          </ProfileRightTop>
          <ProfileRightBottom>
            <Feed username={username}/> 
            <Rightbar user={user}/> 
          </ProfileRightBottom>
        </ProfileRight>
      </Profilee>
    </div>
  )
}

export default Profile
