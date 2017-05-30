/**
*
* UserWinContainer
*
*/

import React from 'react';
import { Wrapper, DetailsWrapper, LikesWrapper, Img, FA, P, H3, Span } from './styles';


function UserWinContainer({ win, likeClick }) {
  return (
    <Wrapper>
      <Img src={win.imgLink} />
      <DetailsWrapper>
        <H3>{win.title}</H3>
        <P>{win.user}</P>
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

UserWinContainer.propTypes = {
  win: React.PropTypes.object,
  likeClick: React.PropTypes.func,
};

export default UserWinContainer;
