import styled from 'styled-components';

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border: 3px solid #444;
  color: #444;
  & :last-child {
    margin-bottom: 1em;
  }
`;

export const Button = styled.button `
  width: 10em;
  padding: 1em;
  color: #444;
  border: 3px solid #444;
  margin: 0.5em 1em 0em 1em;
  &:hover {
    background: purple;
  }
`;

