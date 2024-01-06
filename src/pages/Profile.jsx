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
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  console.log(user, "yoyo")
  return (
    <div>
      <Topbar/>
      <Profilee>
        <Sidebar/>
        <ProfileRight>
          <ProfileRightTop>
            <ProfileCover>
              <ProfileCoverphoto src={user.coverPicture || "https://user-images.githubusercontent.com/145147066/277200704-8acbb003-335e-4019-a2fa-37875b942f18.jpeg"}/>
              <ProfileUserphoto src={user.profilePicture || "https://peach-advisory-zebra-318.mypinata.cloud/ipfs/QmT64bZ8iGeqwwvng1HsbTWvmPSB8SDagqMecYycRhCP8f"}/>  
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
