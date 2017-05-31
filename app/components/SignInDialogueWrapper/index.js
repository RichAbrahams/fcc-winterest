/**
*
* SignInDialogueWrapper
*
*/

import React from 'react';
import Wrapper from './styles';


function SignInDialogueWrapper(props) {
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      {props.children}
    </Wrapper>
  );
}

SignInDialogueWrapper.propTypes = {
  children: React.PropTypes.array,
};

export default SignInDialogueWrapper;
