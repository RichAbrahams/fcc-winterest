/**
*
* AddWin
*
*/

import React from 'react';
import { Wrapper, Button } from './styles';


function AddWinToggle({ toggleAddWin }) {
  return (
    <Wrapper>
      <Button onClick={() => toggleAddWin()}>
        Add Win
      </Button>
    </Wrapper>
  );
}

AddWinToggle.propTypes = {

};

export default AddWinToggle;
