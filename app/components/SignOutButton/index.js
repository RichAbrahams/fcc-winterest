/**
*
* SignOutButton
*
*/

import React from 'react';
import FA from './styles';


function SignOutButton({ children, signOut }) {
  return (
    <FA
      onClick={() => signOut()}
      name="sign-out"
      size="3x"
    >
      { children }
    </FA>
  );
}

SignOutButton.propTypes = {
  children: React.PropTypes.array,
  signOut: React.PropTypes.function,
};

export default SignOutButton;
