import styled from 'styled-components'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import {Link} from 'react-router-dom';
// import { Users } from '../Dummydata';

const Postt = styled.div`
    // height: 700px;
    margin-top: 15px;
    border-radius: 10px;
    padding: 15px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
    box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
    overflow-y: scroll;
`
const Postwraper = styled.div`

`
const Profileheading = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    gap: 15px;
`
const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
cursor: pointer;
`
const Username = styled.h3`

`
const Time = styled.span`
    font-size: 12px;
`
const Postdiv = styled.div`

`
const Disc = styled.h4`
    font-size: 16px;
`
const Imagepost = styled.img`
    width: 100%;
    max-height: 650px;
    object-fit: contain;
`
const Likrbar = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7px;
`
const Likecounter = styled.span`

`
const Likeright = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7px;
    cursor: pointer;
`
const Likeleft = styled.div`

`
const Commentscount = styled.span`
    cursor: pointer;
    border-bottom: 1px dashed gray; 
`
const LikeIcon = styled.div`

`

const Post = ({item}) => {
    const [like, setLike] = useState(item.like.length);
    const [isLiked,setIsLiked] = useState(false);
    const [icon, setIcon] = useState(<FavoriteBorderIcon/>);
    const [user, setUser] = useState({});

    useEffect(()=>{
    const fetchUser = async()=>{
      const res = await axios.get(`/users/${item.userId}`);
      setUser(res.data)
    };
    fetchUser();
  }, [item.userId]);

    const likeHandler =() => {
        setLike(isLiked ? like-1 : like+1);
        setIcon(isLiked ? <FavoriteBorderIcon/> : <FavoriteIcon/>)
        setIsLiked(!isLiked); // in this line !isLiked just changing(oppositeing) the value of isLiked 
    }
  return (
    <Postt>
        <Postwraper>
            <Heading>
                <Profileheading>
                    <Link to={`/profile/${user.username}`}>
                        <Image src={user.profilePicture || 'https://private-user-images.githubusercontent.com/145147066/286381759-9a40c43c-cbf6-4c07-b4b7-f2a3de7ad214.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMDEwNTIsIm5iZiI6MTcwMTIwMDc1MiwicGF0aCI6Ii8xNDUxNDcwNjYvMjg2MzgxNzU5LTlhNDBjNDNjLWNiZjYtNGMwNy1iNGI3LWYyYTNkZTdhZDIxNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyOFQxOTQ1NTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NjhkYmUxYzc5NjVmMDdkZDJlMzk0YTI1ODY2Y2FlNjA5ZTA0YTMyYjAzNDY0NzRhMzVmMjJhYTY5NTJlYmY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.gHGxuPXzgVSmau_6ow3PiQ_b643r2GaEt0oNbBiB9uM'}/>
                    </Link>
                    <Username>{user.username}</Username>
                    {/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                        const evenNumbers = numbers.filter(function(number) {
                        return number % 2 === 0;
                        });
                        console.log(evenNumbers); // Output: [2, 4, 6, 8, 10] */}
                    <Time> {format(item.createdAt)}</Time>
                </Profileheading>
                <MoreVertIcon/>
            </Heading>
            <Postdiv>
                <Disc>{item.desc}</Disc>
                <Imagepost src={item.img}/>
            </Postdiv>
            <Likrbar>
                <Likeright>
                    <LikeIcon onClick={likeHandler}>
                        {icon}
                    </LikeIcon>
                    <CommentIcon/>
                    <Likecounter>{like} people like it</Likecounter>
                </Likeright>
                <Likeleft>
                    <Commentscount>{item.comment} comments</Commentscount>
                </Likeleft>
            </Likrbar>
        </Postwraper>
    </Postt>
  )
}

export default Post
