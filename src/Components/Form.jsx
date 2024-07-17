import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    // height: 100%
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    
  }
`;

const sharedStyles = css`
  font-family: "Big Shoulders Display", sans-serif;
  font-size: 1.1rem;
  background-color: #070707;
  height: 40px;
  color: #FFE6BC;
  // border-radius: 15px;
  border-bottom: 1px solid #FFE6BC;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20px;

`;

const StyledForm = styled.form`
  width: 100%;
  min-width: 500px;
  padding: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  color: #FFE6BC;
  width: 100%;
  min-height: 100px;
  resize: none;
  font-family: "Big Shoulders Display", sans-serif;

  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  font-family: "Chakra Petch", sans-serif;
  background-color: #6E614B;
  color: #FFE6BC;
  font-size: 0.9rem;
  border: 3px solid #FFE6BC;
  border-radius: 15px;
  width: 16vw;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: pink;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initalState = {
  name: '',
  email: '',
  message: '',
};

function Form() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted!');
    console.log(state);

    for (let key in state) {
      if (state[key] === '') {
        setError(`You must provide the ${key}`)
        return
      }
    }
    setError('');
    // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // const test = regex.test(state.email);
    // console.log(test);

    console.log("Succeeded!!!")
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <StyledInput
            type="text"
            name="name"
            placeholder="WHAT’S YOUR NAME?"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email"></label>
          <StyledInput
            type="email"
            name="email"
            placeholder="WHAT’S YOUR ADDRESS?"
            text-color="purple"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="message"></label>
          <StyledTextArea
            name="message"
            placeholder="HOW CAN I HELP"
            value={state.message}
            onChange={handleInput}
          />
          <style> 
                {` 
                    ::placeholder { 
                        color: #FFE6BC; 
                        font-weight: 500;
                    }` 
                } 
            </style> 
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default Form;