/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MainContent from 'components/MainContent';
import WinContainer from 'components/WinContainer';
import { createStructuredSelector } from 'reselect';
import { selectUsername, selectWins, selectLoaded } from 'containers/Header/selectors';
import TitleWrapper from 'components/TitleWrapper';
import PageWrapper from 'components/PageWrapper';
import ContentWrapper from 'components/ContentWrapper';
import PageTitle from 'components/PageTitle';
import NavWrapper from 'components/NavWrapper';
import MyWinsLink from 'components/MyWinsLink';
import * as actions from './actions';
export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <PageWrapper>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
        { this.props.loaded && <TitleWrapper>
          <PageTitle>
            Latest Wins
          </PageTitle>
          <NavWrapper>
            { this.props.user && <MyWinsLink />}
          </NavWrapper>
        </TitleWrapper>}
        <ContentWrapper>
          <MainContent>
            { this.props.wins.map((item, index) => <WinContainer key={index} win={item} {...this.props} />)}
          </MainContent>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

HomePage.propTypes = {
  loaded: PropTypes.bool,
  user: PropTypes.string,
  wins: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  wins: selectWins(),
  user: selectUsername(),
  loaded: selectLoaded(),
});

function mapDispatchToProps(dispatch) {
  return {
    likeClick: (payload) => dispatch(actions.likeClick(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
