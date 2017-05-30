import styled from 'styled-components';

export const Wrapper = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 5;
  & :last-child {
    margin: 0rem 3rem 0rem 2rem;
  }
  @media screen and (max-width: 850px) {
    position: relative;
    justify-content: center;
    & :last-child {
    margin: 0rem 1rem 0rem 1rem;
    }
    & :first-child {
    margin: 0rem 1rem 0rem 1rem;
    }
  }
`;

