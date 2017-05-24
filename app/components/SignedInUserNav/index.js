/**
*
* SignedInUserNav
*
*/

import React from 'react';
import { Button } from './styles';


function SignedInUserNav({ username, signOut }) {
  return (
    <div>
      <h2>{username}</h2>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}

SignedInUserNav.propTypes = {
  username: React.PropTypes.string.isRequired,
  signOut: React.PropTypes.func.isRequired,
};

export default SignedInUserNav;
