import { createSelector } from 'reselect';
import { selectWins } from 'containers/Header/selectors';

const selectUserWinsDomain = () => (state) => state.get('userWins');

const selectUser = () => createSelector(
  selectUserWinsDomain(),
  (substate) => substate.get('selectedUser')
);

const selectUserWins = () => createSelector(
  selectUser(),
  selectWins(),
  (user, wins) => wins.filter((item) => item.user === user)
);

export {
  selectUser,
  selectUserWins,
};
