/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { submitWin as submitWinHeader } from 'containers/Header/actions';
import Helmet from 'react-helmet';
import AddWinToggle from 'components/AddWinToggle';
import AddWin from 'components/AddWin';
import MainContent from 'components/MainContent';
import { createStructuredSelector } from 'reselect';
import { Wrapper } from './styles';
import * as actions from './actions';
import * as selectors from './selectors';
export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleSubmit(payload) {
    return new Promise((resolve, reject) => {
      this
        .props
        .submitWin({ data: payload, resolve, reject });
    });
  }

  render() {
    return (
      <Wrapper>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
        <AddWinToggle {...this.props} />
        { this.props.showAddWin && <AddWin {...this.props} onSubmit={(payload) => this.handleSubmit(payload)} />}
        <MainContent {...this.props} />
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  showAddWin: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  showAddWin: selectors.selectShowAddWin(),
  wins: selectors.selectWins(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleAddWin: () => dispatch(actions.toggleAddWin()),
    submitWin: (payload) => dispatch(actions.submitWin(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
