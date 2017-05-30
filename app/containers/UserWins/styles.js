import styled from 'styled-components';

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
`;

export const ContentWrapper = styled.div `
  margin-left: auto;
  margin-right: auto;
  padding: 0em 3em 3em 3em;
  width: 100%;
  display: flex;
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
