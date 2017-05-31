/**
*
* SignInDialogueTitle
*
*/

import React from 'react';
import Title from './styles';


function SignInDialogueTitle(props) {
  return (
    <Title>
      {props.children}
    </Title>
  );
}

SignInDialogueTitle.propTypes = {
  children: React.PropTypes.string,
};

export default SignInDialogueTitle;
