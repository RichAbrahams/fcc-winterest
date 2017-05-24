/**
*
* SignIn
*
*/

import React from 'react';
import { Button } from './styles';


function SignInButton({ toggleSignIn }) {
  return (
    <Button onClick={() => toggleSignIn()}>
      SignIn
    </Button>
  );
}

SignInButton.propTypes = {
  toggleSignIn: React.PropTypes.func,
};

export default SignInButton;
