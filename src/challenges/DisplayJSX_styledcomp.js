import React from 'react';
import styled from 'styled-components'

const user = {
  name: 'Chris on Code',
  location: 'Las Vegas',
  foodType: 'Everything',
  age: 28,
  likes: 'Coding into the wee hours of the morning',
  twitterUsername: 'chrisoncode',
  avatar:
    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
};

const Card = styled.div`
  min-width: 450px;
  display:flex;
  border: 1px solid #949396;
  justify-content: space-between;  
  border-radius: 10px;
  padding: 24px;
`
const Title = styled.h1`
  font-size: 1.5em;
  color: #5386E4;
`;
const Avatar = styled.div`
  width: 280px;
  overflow: hidden;

  img {
    width: 100%;
  }
`
const CardContent = styled.div`
  padding: 0px 24px 0px 24px;
  font-size: 1.5em;
  text-align: left;
`;
const Texto = styled.p`
  // font-size: 1.1em;
  color: #4C4B63;
`;
const SupText = styled.strong`
  color: #ABA8B2;
`

const DisplayJSXStyled = () => {  
  return (
       <Card>
         <Avatar>
            <img src={user.avatar} alt={user.name} />
         </Avatar>
         <CardContent>
            <Title> {user.name} </Title>
            <Texto>
              <SupText>Location: </SupText> {user.location}
            </Texto>
            <Texto> 
              <SupText>Food type: </SupText>  {user.foodType}
            </Texto>
            <Texto>
              <SupText>Age: </SupText> {user.age}
            </Texto>
            <Texto>
              <SupText> Likes </SupText> {user.likes}
            </Texto>
            <Texto>
              <SupText>Twitter</SupText> <a href={`https://twitter.com/@${user.twitterUsername}`}>@{user.twitterUsername}</a>
            </Texto>
         </CardContent>         
       </Card>
  );
}

export default DisplayJSXStyled;
