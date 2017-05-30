/**
*
* AddWin
*
*/

import React from 'react';
import { FA } from './styles';

function AddWinToggle({ toggleAddWin }) {
  return (
    <FA
      name="plus-circle"
      size="4x"
      onClick={() => toggleAddWin()}
    />
  );
}

AddWinToggle.propTypes = {
  toggleAddWin: React.PropTypes.func.isRequired,
};

export default AddWinToggle;
