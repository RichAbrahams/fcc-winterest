/**
*
* SignedInUserNav
*
*/

import React from 'react';
import SignOutButton from 'components/SignOutButton';
import { Wrapper, H3 } from './styles';

function SignedInUserNav({ username, signOut }) {
  return (
    <Wrapper>
      <H3>{username}</H3>
      <SignOutButton
        signOut={signOut}
        name="sign-out"
        size="3x"
      />
    </Wrapper>
  );
}

SignedInUserNav.propTypes = {
  username: React.PropTypes.string.isRequired,
  signOut: React.PropTypes.func.isRequired,
};

export default SignedInUserNav;
