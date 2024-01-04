import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Share from './Share';
import axios from "axios";
import Post from "./Post";
import { AuthContext } from '../context/AuthContext';
// import { posts } from '../Dummydata' asdsd;

const Feedd = styled.div`
  flex: 5.5;
`

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = username 
      ? await axios.get("/posts/profile/" + username)
      : await axios.get("/posts/timeline/" + user._id);
      setPosts(res.data.sort((p1, p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }));
    };
    fetchPosts(); 
  }, [username, user._id]);

  return (
    <Feedd>
        {(!username || username === user.username) && <Share />}
        {
          posts.map(item=>(
            <Post item={item} key={item._id}/>
          ))
        }
    </Feedd>
  )
}

export default Feed
