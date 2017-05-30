import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

export const Wrapper = styled.div `
    background: #fff;
    margin: 1em;
    width: 200px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-shadow: 0px 9px 19px 0 #151010;
    border-radius: 5px 5px 0px 0px;
`;

export const DetailsWrapper = styled.div `
  padding: 0.75em;
  background: rgb(156, 165, 167);
`;

export const LikesWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  > h5 {
    margin: 0em 0em 0em 0.5em;
    transform: translateY(2px)
  }
`;

export const Img = styled.img `
  width: 100%;
  overflow: hidden;
  align-self: center;
  border-radius: 5px 5px 0px 0px;
`;

export const FA = styled(FontAwesome)`
  color: rgb(195, 31, 31);
`;

export const P = styled.p`
  margin-top: 0;
  font-size: 0.9em;
  color: #222;
`;

export const Span = styled.span`
  margin-top: 0;
  font-size: 0.9em;
  color: #222
`;

export const H3 = styled.h3`
  margin: 0;
  color: #222
`;
