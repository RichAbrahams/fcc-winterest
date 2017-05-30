import { createSelector } from 'reselect';

import { selectUsername, selectWins } from 'containers/Header/selectors';

const selectMyWinsDomain = () => (state) => state.get('myWins');

const selectShowAddWin = () => createSelector(
  selectMyWinsDomain(),
  (substate) => substate.get('showAddWin')
);

const selectMyWins = () => createSelector(
  selectUsername(),
  selectWins(),
  (user, wins) => wins.filter((item) => item.user === user)
);

export {
  selectMyWins,
  selectShowAddWin,
};

