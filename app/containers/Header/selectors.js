import { createSelector } from 'reselect';


const selectHeaderDomain = () => (state) => state.get('header');

const selectShowSignIn = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('showSignIn')
);

const selectUsername = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('username')
);

export {
  selectShowSignIn,
  selectUsername,
};
