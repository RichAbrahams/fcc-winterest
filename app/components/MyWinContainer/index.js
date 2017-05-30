/**
*
* MyWinContainer
*
*/

import React from 'react';
import { Wrapper, DetailsWrapper, LikesWrapper, Img, FA, P, H3, Span, Bottom, FADelete } from './styles';

function MyWinContainer({ win, likeClick, deleteWin }) {
  return (
    <Wrapper>
      <Img src={win.imgLink} />
      <DetailsWrapper>
        <H3>{win.title}</H3>
        <P>{win.user}</P>
        <Bottom>
          <FADelete
            name="minus-circle"
            onClick={() => deleteWin(win)}
            size="2x"
          />
          <LikesWrapper>
            <FA
              name="heart"
              onClick={() => likeClick(win)}
            />
            <h5>{win.liked ? <Span>{win.liked.length}</Span> : <Span>0</Span>}</h5>
          </LikesWrapper>
        </Bottom>
      </DetailsWrapper>
    </Wrapper>
  );
}

MyWinContainer.propTypes = {
  win: React.PropTypes.object,
  likeClick: React.PropTypes.func,
  deleteWin: React.PropTypes.func,
};

export default MyWinContainer;
