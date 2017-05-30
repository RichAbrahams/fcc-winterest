/**
*
* FullScreenCover
*
*/

import React from 'react';
import { Wrapper } from './styles';


function FullScreenCover(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

FullScreenCover.propTypes = {
  children: React.PropTypes.object,
};

export default FullScreenCover;
