import { createSelector } from 'reselect';

const selectHomePageDomain = () => (state) => state.get('homePage');

const selectShowAddWin = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.get('showAddWin')
);

const selectWins = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.get('wins').toArray()
);

export {
  selectShowAddWin,
  selectWins,
};
