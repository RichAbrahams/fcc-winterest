/*
 *
 * UserWins
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import MainContent from 'components/MainContent';
import UserWinContainer from 'components/UserWinContainer';
import Back from 'components/Back';
import { likeClick } from 'containers/HomePage/actions';
import { selectLoaded, selectUsername } from 'containers/Header/selectors';
import TitleWrapper from 'components/TitleWrapper';
import PageTitle from 'components/PageTitle';
import NavWrapper from 'components/NavWrapper';
import MyWinsLink from 'components/MyWinsLink';
import PageWrapper from 'components/PageWrapper';
import ContentWrapper from 'components/ContentWrapper';
import * as actions from './actions';
import * as selectors from './selectors';
export class UserWins extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.setUser(this.props.routeParams.slug);
  }

  render() {
    return (
      <PageWrapper>
        <Helmet
          title="UserWins"
          meta={[
            { name: 'description', content: 'Description of UserWins' },
          ]}
        />
        { this.props.loaded && <TitleWrapper>
          <PageTitle>
            {`${this.props.params.slug} wins`}
          </PageTitle>
          <NavWrapper>
            <Back />
            {this.props.user && <MyWinsLink />}
          </NavWrapper>
        </TitleWrapper>}
        <ContentWrapper>
          <MainContent>
            { this.props.wins.map((item, index) => <UserWinContainer key={index} win={item} {...this.props} />)}
          </MainContent>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

UserWins.propTypes = {
  wins: PropTypes.array,
  user: PropTypes.string,
  loaded: PropTypes.bool,
  params: PropTypes.object,
  setUser: PropTypes.func,
  routeParams: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  wins: selectors.selectUserWins(),
  loaded: selectLoaded(),
  user: selectUsername(),
});

function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => dispatch(actions.setUser(user)),
    likeClick: (payload) => dispatch(likeClick(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserWins);
