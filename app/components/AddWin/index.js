/**
*
* AddWin
*
*/

import React from 'react';
import AddWinForm from 'components/AddWinForm';
import FullScreenCover from 'components/FullScreenCover';

function AddWin(props) {
  return (
    <FullScreenCover>
      <AddWinForm {...props} onSubmit={props.onSubmit} />
    </FullScreenCover>
  );
}

AddWin.propTypes = {
  onSubmit: React.PropTypes.func,
};

export default AddWin;
