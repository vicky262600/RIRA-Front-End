import React from 'react'
import styled from 'styled-components'
import Online from './Online'
import { Users } from '../Dummydata'

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
  justify-content: center;
  gap: 15px;
`

const RightbarFollowing = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
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
  
`


const Rightbar = ({user}) => {

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
          <RightbarFollowing>
            <RightProfile src='https://user-images.githubusercontent.com/145147066/272936528-c4072f24-deb4-4cd7-b4b1-2f8e9a9f90d7.jpg'></RightProfile>
            <Span>Harsh</Span>
          </RightbarFollowing>
          <RightbarFollowing>
            <RightProfile src='https://user-images.githubusercontent.com/145147066/272936528-c4072f24-deb4-4cd7-b4b1-2f8e9a9f90d7.jpg'></RightProfile>
            <Span>Harsh</Span>
          </RightbarFollowing>
          <RightbarFollowing>
            <RightProfile src='https://user-images.githubusercontent.com/145147066/272936528-c4072f24-deb4-4cd7-b4b1-2f8e9a9f90d7.jpg'></RightProfile>
            <Span>Harsh</Span>
          </RightbarFollowing>
          <RightbarFollowing>
            <RightProfile src='https://user-images.githubusercontent.com/145147066/272936528-c4072f24-deb4-4cd7-b4b1-2f8e9a9f90d7.jpg'></RightProfile>
            <Span>Harsh</Span>
          </RightbarFollowing>
          <RightbarFollowing>
            <RightProfile src='https://user-images.githubusercontent.com/145147066/272936528-c4072f24-deb4-4cd7-b4b1-2f8e9a9f90d7.jpg'></RightProfile>
            <Span>Harsh</Span>
          </RightbarFollowing>
          <RightbarFollowing>
            <RightProfile src='https://user-images.githubusercontent.com/145147066/272936528-c4072f24-deb4-4cd7-b4b1-2f8e9a9f90d7.jpg'></RightProfile>
            <Span>Harsh</Span>
          </RightbarFollowing>
          <RightbarFollowing>
            <RightProfile src='https://user-images.githubusercontent.com/145147066/272936528-c4072f24-deb4-4cd7-b4b1-2f8e9a9f90d7.jpg'></RightProfile>
            <Span>Harsh</Span>
          </RightbarFollowing>
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
