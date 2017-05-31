/**
*
* SignInDialog
*
*/

import React from 'react';
import SignInDialogueWrapper from 'components/SignInDialogueWrapper';
import SignInDialogueTitle from 'components/SignInDialogueTitle';
import Button from 'components/SignInDialogueButton';
import FA from 'components/FontAwesome';


function SignInDialog({ signIn }) {
  return (
    <SignInDialogueWrapper>
      <SignInDialogueTitle>Sign In</SignInDialogueTitle>
      <Button signIn={signIn} service="google">
        <FA
          name="google"
          size="2x"
          color="white"
        />
      </Button>
      <Button signIn={signIn} service="github">
        <FA
          name="github"
          size="2x"
          color="white"
        />
      </Button>
      <Button signIn={signIn} service="twitter">
        <FA
          name="twitter"
          size="2x"
          color="white"
        /></Button>
    </SignInDialogueWrapper>
  );
}

SignInDialog.propTypes = {
  signIn: React.PropTypes.func,
};

export default SignInDialog;
