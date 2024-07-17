import React from 'react'
import styled from 'styled-components'

const data = [
  "DESIGN",
  "|",
  "DEVELOPMENT",
  "|",
  "BRANDING",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  position: relative;
  font-size: 14px;
  font-weight: 300;
  background: #070707;

    @media only screen and (max-width: 768px) {
    height: 400vh;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`;

const Title = styled.div`
   display: flex;
  flex-direction: row;
  margin-top: 10px;
  padding-left: 10px;

`;

const Heading = styled.p`
  text-align: right;
  padding: 0px 0px 0px 20px;
  font-size: 45px;
  color: white;
  font-weight: 700;
  letter-spacing: 0.3rem;
`;

const Left = styled.div`
  padding: 0px 0px 0px 30px;
  align-items: flex-start;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
//  gap: 20px;
  padding-bottom: 5%;
`;


const ListItem1 = styled.li`
 display: flex;
 flex-direction: row;
 padding: 30px 300px 0px 0px;
 gap: 30px;
  align-items:center;
`;

const ListItem2 = styled.li`
 display: flex;
 flex-direction: row;
 padding: 30px 300px 0px 0px;
 gap: 30px;
  align-items:center;
`;

const ListItem3 = styled.li`
 display: flex;
 flex-direction: row;
 padding: 30px 300px 0px 0px;
 gap: 30px;
  align-items:center;
`;


const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items:flex-end;
  font-size: 40px;
  font-family: "Big Shoulders Display", sans-serif;
  font-weight: bold;
  cursor: pointer;
  padding: 0px 0px 0px 0px;
  color: transparent;
  color: #FFE6BC;
  -webkit-text-stroke: 1px;
  position: relative;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: start;
`;

const Desc = styled.p`
  
`;

const Desc1 = styled.p`
  font-size: 20px;
`;


const Services = () => {
  return (
    <Section>
      <Container>
        <Title>

        <Heading><span style={{color: '#6E614B',   fontFamily: '"Big Shoulders Display", sans-serif'}}>HOW</span>
              <span style={{color: '#FFE6BC',   fontFamily: '"Big Shoulders Display", sans-serif'}}> CAN I HELP ?</span>
         </Heading>
        
        </Title>
        
        <Left>
          <List>
              <ListItem1>
                <H1>| DESIGN   
                
                  <span style={{color: '#B18FF3',   fontFamily: '"Chakra Petch", sans-serif', fontSize: '20px', paddingTop:'5px', fontWeight: '100'}}>01</span> 
                 
                </H1>

                 <Desc1 style={{color:'#6E614B', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
                        My mission is to drive exceptional growth for my clients by increasing their brand appearance, defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.
                        <span style={{color:'#FFE6BC', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
                        With a background in strategic marketing and acknowledged expertise in web development, I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.</span>
                  </Desc1>
              </ListItem1>

              <ListItem2>
                <H1>| DEVELOPMENT  
                
                  <span style={{color: '#B18FF3',   fontFamily: '"Chakra Petch", sans-serif', fontSize: '20px', paddingTop:'5px', fontWeight: '100'}}>02</span> 
                
                </H1>

                 <Desc1 style={{color:'#6E614B', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
                        My mission is to drive exceptional growth for my clients by increasing their brand appearance, defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.
                        <span style={{color:'#FFE6BC', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
                        With a background in strategic marketing and acknowledged expertise in web development, I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.</span>
                  </Desc1>
              </ListItem2>

              <ListItem3>
                <H1>| BRANDING  
                
                  <span style={{color: '#B18FF3',   fontFamily: '"Chakra Petch", sans-serif', fontSize: '20px', paddingTop:'5px', fontWeight: '100'}}>03</span> 
                
                </H1>

                 <Desc1 style={{color:'#6E614B', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
                        My mission is to drive exceptional growth for my clients by increasing their brand appearance, defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.
                        <span style={{color:'#FFE6BC', fontFamily: '"Chakra Petch", sans-serif', fontStyle: 'normal'}}>
                        With a background in strategic marketing and acknowledged expertise in web development, I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.</span>
                  </Desc1>
              </ListItem3>
          </List>
        </Left>
      </Container>
    </Section>
  )
}

export default Services
