import React, { Suspense } from "react";
import styled from "styled-components";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  background-color: #070707;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  position: relative;
  width: 430px;
  height: 330px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 30px;
  align-items: center;
  justify-content: right;
  color: white;
  border-radius: 20px;
  background: rgba(7, 7, 7, 0.01);
  backdrop-filter: blur(2px);
  //box-shadow: 1px 1px 4px 4px rgba(255, 230, 188, 0.07);
  padding: 0px 16px 16px 16px;


  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Bullet = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding-top: 4%;
`;

const Bullets = styled.img`
  height: 300px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
//text-align: right;
  padding: 16px 16px 16px 16px;
  font-size: 25px;
  color: whihte;
  padding-top: 14%;
`;

const Post1 = styled.p`
  line-height: 0.7;
  padding-bottom: 15px;
`;

const Post2 = styled.p`
  line-height: 0.7;
  padding-bottom: 15px;
`;

const Post3 = styled.p`
  line-height: 0.7;
  padding-bottom: 15px;

`;

const Post4 = styled.p`
  line-height: 0.7;
  padding-bottom: 15px;

`;

const Post5 = styled.p`
  line-height: 0.7;
  padding-bottom: 15px;

`;

const Headings = styled.p`
  text-align: left;
  padding: 0px 16px 16px 16px;
  font-size: 25px;
  color: white;
  font-weight: bold;
  margin-left: 5%;

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 5%;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  justify-content: end;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #FFE6BC;
  font-family: "Big Shoulders Display", sans-serif;
  padding-bottom: 15px;
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding-left: 5%;
`;

const Logo = styled.img`
  height: 150px;
`;



const Desc = styled.p`
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #43423B;
  color: #FFE6BC;
  border: 2px solid #FFE6BC;
  font-weight: 500;
  width: 150px;
  padding: 10px;
  margin-top: 15px;
  margin-right: 50px;
  border-radius: 15px;
  cursor: pointer;
  align-self: end;
  font-family: "Big Shoulders Display", sans-serif;
  font-size: 15px;
  letter-spacing: 2px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Headings style={{color: '#FFE6BC',   fontFamily: '"Big Shoulders Display", sans-serif', fontSize: '35px', letterSpacing: '0.3rem'}}>Work Experience :</Headings>
          <Title>
          <Bullet>
            <Bullets src="./img/bullets.png"/>
          </Bullet>
            <Posts>

              <Post1 style={{color:'#FFE6BC', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
              UI/UX designer in MyCTO <br/> 
              <span style={{ color: '#B18FF3',fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal', fontSize:'10px'}}>UI/UX designer in MyCTO </span> <br/>
              </Post1>

              <Post2 style={{color:'#676686', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
              UI/UX designer in BuyFi <br/> 
              <span style={{ color: '#B18FF3',fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal', fontSize:'10px'}}>UI/UX designer in MyCTO </span><br/>
              </Post2>

              <Post3 style={{color:'#FFE6BC', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
              Graphics design Lead <br/> 
              <span style={{ color: '#B18FF3',fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal', fontSize:'10px'}}>UI/UX designer in MyCTO </span><br/>
              </Post3>

              <Post4 style={{color:'#676686', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
              Photo & Video Editor <br/> 
              <span style={{ color: '#B18FF3',fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal', fontSize:'10px'}}>UI/UX designer in MyCTO </span><br/>
              </Post4>

              <Post5 style={{color:'#FFE6BC', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
              Graphics Designer <br/> 
              <span style={{ color: '#B18FF3',fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal', fontSize:'10px'}}>UI/UX designer in MyCTO </span><br/>
              </Post5>

            </Posts>         
          </Title>
        </Left>
        <Right>
          <Placeholder>
            <Logo src="./img/logo1.png"/>
          </Placeholder>
          <WhatWeDo>
            <Subtitle> <span style={{color:'#6E614B',   fontFamily: '"Big Shoulders Display", sans-serif' }}>WHO</span> AM I ?</Subtitle>
          
          <Desc style={{color:'#FFE6BC', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
          <span style={{color:'#6E614B',   fontFamily: '"Chakra Petch", sans-serif' }}>
          My mission is to drive exceptional growth for my clients by increasing their brand appearance, defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.</span>
          With a background in strategic marketing and acknowledged expertise in web development, I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.
          </Desc>
          <Button>READ MY CV</Button>
          </WhatWeDo>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;