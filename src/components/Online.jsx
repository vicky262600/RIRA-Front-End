import React from 'react'
import styled from 'styled-components'

const Onlinefriends = styled.div`
  
`
const Rigthbarfriendslist = styled.ul`
  list-style: none;
  gap: 20px;
  padding-left: 25px;
`
const Rightbarfriend = styled.li`
  gap: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin-left: 0;
`
const Imagefriend = styled.img`
  width: 45px;
  height: 45px; 
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`
const Span = styled.span`
  cursor: pointer;
`
const Onlinedot = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-top: -32px;
  margin-left: -32px;
  border: 2px solid white;
  background-color: limegreen;
`

const Online = ({item}) => {
  return (
    <Onlinefriends>
            <Rigthbarfriendslist>
              <Rightbarfriend>
                <Imagefriend src={item.profilePicture} />
                <Onlinedot></Onlinedot>
                <Span>{item.username}</Span>
              </Rightbarfriend>
            </Rigthbarfriendslist>
    </Onlinefriends>
  )
}

export default Online
