import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Share from './Share';
import axios from "axios"
import Post from "./Post"
// import { posts } from '../Dummydata';

const Feedd = styled.div`
  flex: 5.5;
`

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      const res = await axios.get("posts/timeline/654ec38cb68a14c94b1758eb");
      setPosts(res.data)
    };
    fetchData(); 
  })
  return (
    <Feedd>
        <Share/>
        {
          posts.map(item=>(
            <Post item={item} Key={item.id}/>
          ))
        }
    </Feedd>
  )
}

export default Feed
