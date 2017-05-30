/**
*
* Win
*
*/

import React from 'react';
import { browserHistory } from 'react-router';
import { Wrapper, DetailsWrapper, LikesWrapper, Img, FA, P, H3, Span } from './styles';

function WinContainer({ win, likeClick }) {
  return (
    <Wrapper>
      <Img src={win.imgLink} />
      <DetailsWrapper>
        <H3>{win.title}</H3>
        <P onClick={() => browserHistory.push(`userwins/${win.user}`)}>{win.user}</P>
        <LikesWrapper>
          <FA
            name="heart"
            onClick={() => likeClick(win)}
          />
          <h5>{win.liked ? <Span>{win.liked.length}</Span> : <Span>0</Span>}</h5>
        </LikesWrapper>
      </DetailsWrapper>
    </Wrapper>
  );
}

WinContainer.propTypes = {
  win: React.PropTypes.object,
  likeClick: React.PropTypes.func,
};

export default WinContainer;

