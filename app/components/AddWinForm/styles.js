import styled from 'styled-components';

const Input = styled.input`
  height: 2em;
  width: 100%;
  padding: 0.5em;
  margin: 0em 0em 0em 0em;
  color: #333;
  border: 2px solid #333;
  background: ${(props) => props.disabled ? '#95a2ad' : 'white'};
`;

export default Input;

