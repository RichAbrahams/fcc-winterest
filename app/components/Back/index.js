/**
*
* Back
*
*/

import React from 'react';
import { browserHistory } from 'react-router';
import { FA } from './styles';

function Back() {
  return (
    <FA
      name="arrow-circle-o-left"
      size="4x"
      onClick={() => browserHistory.goBack()}
    />
  );
}

Back.propTypes = {

};

export default Back;
