import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Share from './Share';
import axios from "axios"
import Post from "./Post"
// import { posts } from '../Dummydata';

const Feedd = styled.div`
  flex: 5.5;
`

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("posts/timeline/654ec38cb68a14c94b1758eb");
      setPosts(res.data.sort((p1, p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }));
    };
    fetchPosts(); 
  }, [username]);

  return (
    <Feedd>
        <Share/>
        {
          posts.map(item=>(
            <Post item={item} key={item._id}/>
          ))
        }
    </Feedd>
  )
}

export default Feed
