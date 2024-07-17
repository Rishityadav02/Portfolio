import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #070707;
  

`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;

`;

const Center = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;
  gap: 50px;
  text-align: center;

`;

const Title = styled.h1`
  font-size: 20px;
  font-family: "Big Shoulders Display", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #FFE6BC;
  letter-spacing: 0.3rem;


  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Desc = styled.p`
  display: flex;
  flex-direction: Column;
  font-size: 100px;
  font-family: "Big Shoulders Display", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #FFE6BC;

`;

const Skill = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;

`;

const H1 = styled.div`
  font-family: "Big Shoulders Display", sans-serif;

`;

const Descr = styled.p`
  display: flex;
  flex-direction: column;
`;

const Skills = () => {
  return (
    <Section>
      <Container>
        <Center>
          <Skill>
          <Title>
            SKILLS
          </Title>
          </Skill>
          <Descr>
          <Desc>
            <H1>
                PERSONAL
            </H1>
            <span style={{ color: '#6E614B',fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal', fontSize: '15px', paddingBottom: '20px'}}>Discipline, Attentiveness, Leadership</span>
          </Desc>
          

          <Desc>
            <H1>
                PROFESSIONAL
            </H1>
            <span style={{ color: '#6E614B',fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal', fontSize: '15px', paddingBottom: '20px'}}>Discipline, Attentiveness, Leadership</span>
          </Desc>

          
          <Desc>
            <H1>
                ADDITIONAL
            </H1>
            <span style={{ color: '#6E614B',fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal', fontSize: '15px', paddingBottom: '20px'}}>Discipline, Attentiveness, Leadership</span>
          </Desc>
          
          </Descr>
          
        </Center>

      </Container>
    </Section>
  )
}

export default Skills
