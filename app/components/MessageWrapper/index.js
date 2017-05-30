/**
*
* MessageWrapper
*
*/

import React from 'react';
import { Wrapper } from './styles';


function MessageWrapper(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

MessageWrapper.propTypes = {
  children: React.PropTypes.array,
};

export default MessageWrapper;
