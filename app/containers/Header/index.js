/*
 *
 * Header
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Logo from 'components/Logo';
import SignInButton from 'components/SignInButton';
import SignInModel from 'components/SignInModel';
import SignedInUserNav from 'components/SignedInUserNav';
import { Wrapper } from './styles';
import * as actions from './actions';
import * as selectors from './selectors';

export class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper className="header-wrapper">
        <Logo />
        {!this.props.username && <SignInButton {...this.props} />}
        {this.props.username && <SignedInUserNav {...this.props} />}
        {this.props.showSignIn && <SignInModel {...this.props} />}
      </Wrapper>
    );
  }
}

Header.propTypes = {
  showSignIn: PropTypes.bool,
  username: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  showSignIn: selectors.selectShowSignIn(),
  username: selectors.selectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleSignIn: () => dispatch(actions.toggleShowSignIn()),
    signIn: (payload) => dispatch(actions.signIn(payload)),
    signOut: () => dispatch(actions.signOut()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
