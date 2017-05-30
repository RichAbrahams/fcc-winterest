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


const selectWins = () => createSelector(
  selectHeaderDomain(),
  (substate) => {
    const wins = substate.get('wins').toJS();
    const values = Object.values(wins);
    const uids = Object.keys(wins);
    return values.map((item, index) => {
      const newObj = Object.assign({}, item, { uid: uids[index] });
      return newObj;
    });
  }
);


const selectLoaded = () => createSelector(
  selectHeaderDomain(),
  (substate) => substate.get('loaded')
);

export {
  selectShowSignIn,
  selectUsername,
  selectWins,
  selectLoaded,
};
