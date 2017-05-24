/**
*
* SignInModel
*
*/

import React from 'react';
import SignInDialog from 'components/SignInDialog';
import { Wrapper } from './styles';


function SignInModel(props) {
  return (
    <Wrapper onClick={() => props.toggleSignIn()}>
      <SignInDialog {...props} />
    </Wrapper>
  );
}

SignInModel.propTypes = {
  toggleSignIn: React.PropTypes.func,
};

export default SignInModel;
