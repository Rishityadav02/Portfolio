import React from "react";
import styled from "styled-components";
import Form from "./Form";
import FancyText from '@carefully-coded/react-text-gradient';



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  position: relative;
  background: #070707;

    @media only screen and (max-width: 768px) {
    height: 200vh;
  }

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  color: #FFE6BC;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`;

const Top = styled.div`
  display: flex;
  height: 50vh;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  font-size: 90px;
  color: #FFE6BC;
`;

const Right = styled.div`
  display: flex;
  margin-bottom: 900px;
  Color: black;
`;

const Left1 = styled.p`
  font-family: "Big Shoulders Display", sans-serif;
  font-weight: 800;

`;

const Left2 = styled.p`
  text-align: end;
  padding-right: 200px;
  font-family: "Big Shoulders Display", sans-serif;
  font-weight: 800;
`;

const Left3 = styled.p`
  text-align: center;
  padding-right: 200px;
  font-family: "Big Shoulders Display", sans-serif;
  font-weight: 800;
`;

const Down = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Heading = styled.h2`

`;

const Down2 = styled.div`

`;

const Rows = styled.div`
display: flex;
flex-direction: row;
gap: 30%;
justify-content: center;
`;

const Row1 = styled.div`

`;

const Row2 = styled.div`

`;

const Row3 = styled.div`

`;

const Bottom = styled.div`
display: flex;
flex-direction: column;
gap: 80px;
padding-top: 50px;

`;


const Contact = () => {
  return (
    <Section>
      <Container>
        <Top>
          <Left><FancyText gradient={{ from: '#FFE6BC', to: '#6E614B', type: 'linear'  }}
          animate
          animateDuration={1000}>
                    <Left1>
                            LET'S START
                    </Left1>
                    <Left2>
                            CREATING
                    </Left2>
                    <Left3>
                            TOGETHER
                    </Left3>
                </FancyText>

          </Left>
          <Right>
                <Form/>
          </Right>
        </Top>
        <Bottom>
        <Down>
          <Heading>CONTACT</Heading>
        </Down>
        <Down2>
            <Rows>
              <Row1>Linkedin <br/><br/>
              Facebook<br/><br/>
              Instagram</Row1>

              <Row2>Linkedin <br/><br/>
              Facebook<br/><br/>
              Instagram</Row2>

              <Row3>E-mail<span style={{fontSize: '12px', color: '#6E614B'}}><br/> rishityadav2002@gmail.com</span> <br/><br/>
              Phone<span style={{fontSize: '12px', color: '#6E614B'}}><br/> +91- 80901-51012</span>
              </Row3>
            </Rows>
        </Down2>
        </Bottom>
      </Container>
    </Section>
  );
};

export default Contact;