import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Online from './Online'
import { Users } from '../Dummydata'
import axios from 'axios'
import {Link} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Rightbarr = styled.div`
  flex: 3.5;
  // position: sticky;
  // top: 0;
  // z-index: 999;
`
const Rightbarwraper = styled.div`
  padding: 15px;
`
const Birthdaydiv = styled.div`
  display: flex;
  align-items: center;
`
const Text = styled.span`
  margin-left: 20px 20px 0 0;
`
const Image = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
const Hr = styled.hr`
  margin-top: 20px;
  color: lightgray;
`
const Text1 = styled.div`
  font-weight: bold;
`
const ProfileRightbarr = styled.div`
  
`
const RightbarTitle = styled.h4`
  
`
const RightbarInfo = styled.div`
  margin-bottom: 30px;
` 
const RightbarInfoItem = styled.div`
  margin-bottom: 10px;
`
const RightBarInfoKey = styled.span`
  font-weight: 500;
  margin-right: 15px;
  color: #555; 
`
const RightBarInfoValue = styled.span`
  font-weight: 300;
`
const RightbarFollowings = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const RightbarFollowing = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
  margin: 12px;
`
const RightbarTitle2 = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`
const RightProfile = styled.img`
  weight: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`
const Span = styled.span`
  text-decoration: none;
  color: black;
`

const RightBarButton = styled.button`
  display:flex;
  align-items: center;
  // text-align: center;
  justify-content: center;
  background-color: #1872f1;
  border-radius: 7px;
  border: none;
  padding: 5px 10px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`

const Rightbar = ({ user }) => {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );
  console.log("1", followed);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
        // console.log("f", friends);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [currentUser, user]);

  const handleClick = async () => {
    try {
      if(followed) {
        console.log("2", followed);
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      console.log("3",followed);
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
      console.log("3",followed);
    }
  };

  const HomeRightbar = ()   =>{
    return(
      <>
        <Birthdaydiv>
            <Image src="https://user-images.githubusercontent.com/145147066/275372966-97c35e03-d1d5-474e-b265-7ab2c02b8a18.png"/>
            <Text><b>Vinit singh</b> and <b>3 other friends</b> have birthday today.</Text>
          </Birthdaydiv>
          <Hr/>
          <Text1>Online Friends</Text1>
          {Users.map(item=> (
            <Online key={item.id} item={item}/> 
          ))}
      </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <ProfileRightbarr>
        {user.username !== currentUser.username && (
          <RightBarButton onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <RemoveIcon/> : <AddIcon/>}
          </RightBarButton>
        )}
        <RightbarTitle>User Information</RightbarTitle>
        <RightbarInfo>
          <RightbarInfoItem>
            <RightBarInfoKey>City:</RightBarInfoKey>
            <RightBarInfoValue>{user.city}</RightBarInfoValue>
          </RightbarInfoItem>
          <RightbarInfoItem>
            <RightBarInfoKey>From:</RightBarInfoKey>
            <RightBarInfoValue>{user.from}</RightBarInfoValue>
          </RightbarInfoItem>
          <RightbarInfoItem>
            <RightBarInfoKey>Relationship:</RightBarInfoKey>
            <RightBarInfoValue>{user.relationship}</RightBarInfoValue>
          </RightbarInfoItem>
        </RightbarInfo>
        <RightbarTitle2>User Friends</RightbarTitle2>
        <RightbarFollowings>
          {friends.map((friend)=>(
            <Link to={"/profile/"+ friend.username} style={{textDecoration: "none"}}>
              <RightbarFollowing>
                <RightProfile src={friend.profilePicture ||  "https://private-user-images.githubusercontent.com/145147066/286381759-9a40c43c-cbf6-4c07-b4b7-f2a3de7ad214.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMDEwNTIsIm5iZiI6MTcwMTIwMDc1MiwicGF0aCI6Ii8xNDUxNDcwNjYvMjg2MzgxNzU5LTlhNDBjNDNjLWNiZjYtNGMwNy1iNGI3LWYyYTNkZTdhZDIxNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyOFQxOTQ1NTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NjhkYmUxYzc5NjVmMDdkZDJlMzk0YTI1ODY2Y2FlNjA5ZTA0YTMyYjAzNDY0NzRhMzVmMjJhYTY5NTJlYmY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.gHGxuPXzgVSmau_6ow3PiQ_b643r2GaEt0oNbBiB9uM"}></RightProfile>
                <Span>{friend.username}</Span>
              </RightbarFollowing>      
            </Link>
          ))}                
        </RightbarFollowings>
      </ProfileRightbarr>

    )
  }
  return (
    <Rightbarr>
        <Rightbarwraper>
          {user ? <ProfileRightbar/> : <HomeRightbar/>}
        </Rightbarwraper>
    </Rightbarr>
  )
}

export default Rightbar
