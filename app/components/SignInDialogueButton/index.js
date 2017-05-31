/**
*
* SignInDialogueButton
*
*/

import React from 'react';
import Button from './styles';


function SignInDialogueButton(props) {
  const { children, service, signIn } = props;
  return (
    <Button onClick={() => signIn(service)}>
      {children}
    </Button>
  );
}

SignInDialogueButton.propTypes = {
  children: React.PropTypes.object,
  signIn: React.PropTypes.func,
  service: React.PropTypes.string,
};

export default SignInDialogueButton;
