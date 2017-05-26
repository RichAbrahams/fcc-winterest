/**
*
* AddWin
*
*/

import React from 'react';
import AddWinForm from 'components/AddWinForm';
import { Wrapper } from './styles';

function AddWin(props) {
  return (
    <Wrapper onClick={() => props.toggleAddWin()} >
      <AddWinForm {...props} onSubmit={props.onSubmit} />
    </Wrapper>
  );
}

AddWin.propTypes = {

};

export default AddWin;
