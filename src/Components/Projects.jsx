import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
background-color: #070707;
scroll-snap-align: center;
color: white;
`;

const Container = styled.div`

`;

const Center =styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  text-align: flex-start;
  font-size: 30px;
  padding: 20px;
  font-family: "Big Shoulders Display", sans-serif;
  color: #FFE6BC;
  font-weight: 800;
  letter-spacing: 0.3rem;
`;

const Title2 = styled.img`
  padding: 10px 80px 0px 0px;
  height: 80px;
`;

const Project = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
`;

const Project1 = styled.div`
  flex: 1;
  margin: 25px;
  padding: 30px;
  border: 3px solid #FFE6BC;
  height: 70vh;
  border-radius: 30px;
  background: #6E614B;
`;

const Heads = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Projects = () => {
  return (
    <Section>
      <Container>
        <Center>
          <Heads>
          <Title>PROJECTS</Title>
          <Title2 src="./img/view.svg"/>
          </Heads>
          <Project>
          <Project1>
              item1
          </Project1>
              
          <Project1>
              item2
          </Project1>
             
          <Project1>
              item3
          </Project1>

          <Project1>
              item4
          </Project1>
          
          </Project>
        </Center>
      </Container>
    </Section>
  )
}

export default Projects
