import styled from 'styled-components';

export const Wrapper = styled.div `
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: 2em;
  background: white;
  z-index: 10;
`;

export const TextInput = styled.input`
  height: 2em;
  width: 100%;
  padding: 0.5em;
  margin: 0em 0em 1em 0em;
  color: #333;
  border: 2px solid #333;
  background: ${(props) => props.disabled ? '#95a2ad' : 'white'};
`;

export const Button = styled.button`
  margin: 1em 0em 0em 0em;
  padding: 0.5em;
  background: #EB7F00;
  color: white;
  border-radius: 3px;
  width: ${(props) => props.width};
  &:hover {
    background: rgb(88, 185, 6);
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  margin: 0em 0em 0.5em 0em;
`;

