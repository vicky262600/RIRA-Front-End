import React from 'react'
import styled from 'styled-components'

const Sidebarriendslist = styled.ul`
  list-style: none;
  gap: 20px;
  padding-left: 25px;
`
const Sidebarfriends = styled.li`
  gap: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin-left: 0;
`
const Span = styled.span`
  
`
const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`

const Closefriends = ({item}) => {
  return (
    <Sidebarriendslist>
          <Sidebarfriends>
            <Image src= {item.profilePicture} />
            <Span>{item.username}</Span>
          </Sidebarfriends>
    </Sidebarriendslist>
  )
}

export default Closefriends
