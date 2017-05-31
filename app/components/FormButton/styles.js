import styled from 'styled-components';

export const Button = styled.button`
  margin: 1em 0em 0em 0em;
  padding: 0.5em;
  background: #1b81ca;
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
