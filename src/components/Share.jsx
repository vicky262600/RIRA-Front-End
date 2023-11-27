import React from 'react'
import styled from 'styled-components'
import PermMediaTwoToneIcon from '@mui/icons-material/PermMediaTwoTone';
import LabelTwoToneIcon from '@mui/icons-material/LabelTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';

const Sharee = styled.div`
    width: 100%;
    height: 160px;
    margin-top: 15px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
    box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
`
const Sharewraper = styled.div`
    padding: 15px;
`
const Text = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
`
const Image = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`
const Input = styled.input`
    border: none;
    padding: 10px;
`
const Hr = styled.hr`
    margin-top: 20px;
    color: lightgray;
`
const Media = styled.div`
    display: flex;
    padding: 15px;
    justify-content: space-between;
    `
const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 45px;
`
const Span = styled.span`
    margin-left: 10px;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`
const Button = styled.button`
    font-weight: bold;
    color: white;
    cursor: pointer;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: red;
`


const Share = () => {
  return (
    <Sharee>
        <Sharewraper>
            <Text>
                <Image src="https://user-images.githubusercontent.com/145147066/272936528-c4072f24-deb4-4cd7-b4b1-2f8e9a9f90d7.jpg" />
                <Input placeholder="what's in your mind"/>
            </Text>
            <Hr/>
            <Media>
                <Icons>
                    <Icon>
                      <PermMediaTwoToneIcon/>
                      <Span>Photo or Vider</Span>
                    </Icon>
                    <Icon>
                      <LabelTwoToneIcon/>
                      <Span>Tag</Span>
                    </Icon>
                    <Icon>
                      <LocationOnTwoToneIcon/>
                      <Span>Location</Span>
                    </Icon>
                    <Icon>
                      <EmojiEmotionsTwoToneIcon/>
                      <Span>Feeling</Span>
                    </Icon>
                </Icons>
                <Button>Share</Button>
            </Media>
        </Sharewraper>
    </Sharee>
  )
}

export default Share
