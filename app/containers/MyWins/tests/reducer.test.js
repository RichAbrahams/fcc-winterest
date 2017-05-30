
import { fromJS } from 'immutable';
import myWinsReducer from '../reducer';

describe('myWinsReducer', () => {
  it('returns the initial state', () => {
    expect(myWinsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
