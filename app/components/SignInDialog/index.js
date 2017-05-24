/**
*
* SignInDialog
*
*/

import React from 'react';
import { Wrapper, Button } from './styles';


function handleClick(e, service, props) {
  e.stopPropagation();
  props.signIn(service);
}

function SignInDialog(props) {
  return (
    <Wrapper>
      <h3>Sign In</h3>
      <Button onClick={(e) => handleClick(e, 'google', props)}>Google</Button>
      <Button onClick={(e) => handleClick(e, 'github', props)}>Github</Button>
      <Button onClick={(e) => handleClick(e, 'twitter', props)}>Twitter</Button>
    </Wrapper>
  );
}

SignInDialog.propTypes = {

};

export default SignInDialog;
