/**
*
* SignedInUserNav
*
*/

import React from 'react';
import { Button, Wrapper, H3 } from './styles';


function SignedInUserNav({ username, signOut }) {
  return (
    <Wrapper>
      <H3>{username}</H3>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </Wrapper>
  );
}

SignedInUserNav.propTypes = {
  username: React.PropTypes.string.isRequired,
  signOut: React.PropTypes.func.isRequired,
};

export default SignedInUserNav;
