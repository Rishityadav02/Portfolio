import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
<style>
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&display=swap');
</style>

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #070707;
  

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;



  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;
  gap: 20px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-family: "Big Shoulders Display", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #FFE6BC;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 65px;
  font-family: "Big Shoulders Display", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #FFE6BC;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;


const Hero = () => {
  return (
    <Section>
     <Container>
       <Navbar />
        <Center>
          <Title>
            RISHIT YADAV
          </Title>
          <Desc>
          EXPLORING MY <br/>
            <span style={{ color: '#B18FF3',fontFamily: '"Big Shoulders Display", sans-serif', fontStyle: 'normal'}}>DESIGNING <br/> DEEDS</span> <br/>
          SINCE <br/>
          2022.
          </Desc>
        </Center>

      </Container>
    </Section>
  );
};

export default Hero;