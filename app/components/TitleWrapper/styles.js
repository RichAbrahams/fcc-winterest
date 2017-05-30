import styled from 'styled-components';

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin: 0rem 0rem 2rem 0rem;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

