import React from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import Feed from '../components/Feed'
import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
`

function Home() {
  return (
    <div>
      <Topbar/>
      <HomeContainer>
        <Sidebar/>
        <Feed/>
        <Rightbar/> 
      </HomeContainer>
    </div>
  )
}

export default Home
