/*
 *
 * MyWins
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import TitleWrapper from 'components/TitleWrapper';
import PageTitle from 'components/PageTitle';
import NavWrapper from 'components/NavWrapper';
import PageWrapper from 'components/PageWrapper';
import ContentWrapper from 'components/ContentWrapper';
import AddWin from 'components/AddWin';
import MainContent from 'components/MainContent';
import MyWinContainer from 'components/MyWinContainer';
import MessageWrapper from 'components/MessageWrapper';
import MessageText from 'components/MessageText';
import FontAwesome from 'components/FontAwesome';
import { selectLoaded } from 'containers/Header/selectors';
import Back from 'components/Back';
import AddWinToggle from 'components/AddWinToggle';
import { likeClick } from 'containers/HomePage/actions';
import * as actions from './actions';
import * as selectors from './selectors';


export class MyWins extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleSubmit(payload) {
    return new Promise((resolve, reject) => {
      this
        .props
        .submitWin({ data: payload, resolve, reject });
    });
  }

  render() {
    return (
      <PageWrapper>
        <Helmet
          title="My Wins"
          meta={[
            { name: 'My Wins', content: 'My Wins' },
          ]}
        />
        { this.props.loaded && <TitleWrapper>
          <PageTitle>
            My Wins
          </PageTitle>
          <NavWrapper>
            <Back />
            <AddWinToggle {...this.props} />
          </NavWrapper>
        </TitleWrapper>}
        { (!this.props.wins.length && this.props.loaded) && <MessageWrapper>
          <MessageText>
            Click
            </MessageText>
          <FontAwesome name="plus-circle" color="white" size="3x" />
          <MessageText>
            to add a win.
            </MessageText>
          </MessageWrapper>}
        { this.props.showAddWin && <AddWin {...this.props} onSubmit={(payload) => this.handleSubmit(payload)} />}
        <ContentWrapper>
          { this.props.wins.length ? <MainContent>
            { this.props.wins.map((item, index) => <MyWinContainer key={index} win={item} {...this.props} />)}
          </MainContent> : null}
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

MyWins.propTypes = {
  wins: PropTypes.array,
  showAddWin: PropTypes.bool,
  loaded: PropTypes.bool,
  submitWin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  wins: selectors.selectMyWins(),
  loaded: selectLoaded(),
  showAddWin: selectors.selectShowAddWin(),
});

function mapDispatchToProps(dispatch) {
  return {
    likeClick: (payload) => dispatch(likeClick(payload)),
    toggleAddWin: () => dispatch(actions.toggleAddWin()),
    submitWin: (payload) => dispatch(actions.submitWin(payload)),
    deleteWin: (payload) => dispatch(actions.deleteWin(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyWins);
