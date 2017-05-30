
import { fromJS } from 'immutable';
import userWinsReducer from '../reducer';

describe('userWinsReducer', () => {
  it('returns the initial state', () => {
    expect(userWinsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
