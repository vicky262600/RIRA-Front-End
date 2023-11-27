import React from 'react'
import styled from 'styled-components'
import Closefriends from './Closefriends';
import { Users } from '../Dummydata'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

const Sidebarr = styled.div`
  flex: 3;
  overflow-y: scroll;
  height: calc( 100vh - 65px );
  position: sticky;
  top: 50px;
`
const Sidebarwrap = styled.div`

`
const Sidelist = styled.ul`
  list-style: none;
  gap: 20px;
  padding-left: 25px;
`
const Listitems = styled.li`
  gap: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin-left: 0;
`

const Button = styled.button`
  width: 150px;
  border: none;
  border-radius: 5%;
  padding: 15px;
  font-weight: 500;
`
const Hr = styled.hr`
  margin-top: 20px;
  color: lightgray;
`
const Span = styled.span`
  
`
// const Imagediv = styled.div`
//   height: 27px; 
//   width: 27px;
//   border-radius: 50%;
//   border: 1px solide black;
//   background: url("https://user-images.githubusercontent.com/145147066/274630142-70b7ea8c-8148-48dd-bfa4-2d41142ff75a.jpeg");
//   background-size: cover;
// `


const Sidebar = () => {
  return (
    <Sidebarr>
      <Sidebarwrap>
        <Sidelist>
          <Listitems>
              <RssFeedIcon/>
              <Span>Feed</Span>
          </Listitems>
          <Listitems>
              <ChatIcon/>
              <Span>Chats</Span>
          </Listitems>
          <Listitems>
              <PlayCircleIcon/>
              <Span>Videos</Span>
          </Listitems>
          <Listitems>
              <GroupIcon/>
              <Span>Groups</Span>
          </Listitems>
          <Listitems>
              <BookmarkIcon/>
              <Span>Bookmarks</Span>
          </Listitems>
          <Listitems>
              <HelpIcon/>
              <Span>Questions</Span>
          </Listitems>
          <Listitems>
              <WorkOutlineIcon/>
              <Span>Jobs</Span>
          </Listitems>
          <Listitems>
              <EventIcon/>
              <Span>Events</Span>
          </Listitems>
          <Listitems>
              <SchoolIcon/>
              <Span>Coureses</Span>
          </Listitems>
        </Sidelist>
        <Button>Show More</Button>
        <Hr/>
        {Users.map(item=>(
          <Closefriends item={item} key={item.id}/>
        ))}
      </Sidebarwrap>
    </Sidebarr>  
  )
}

export default Sidebar
