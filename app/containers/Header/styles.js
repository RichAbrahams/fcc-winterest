import styled from 'styled-components';


export const Wrapper = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em 1em 1em;
  position: relative;
  box-shadow: 0px 0px 9px;
  @media screen and (max-width: 800px) {
   flex-direction: column;
   padding: 0em 0em 0em 0em;
  }
`;

