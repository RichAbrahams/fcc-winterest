/**
*
* MyWinsLink
*
*/

import React from 'react';
import { browserHistory } from 'react-router';
import { FA } from './styles';

function MyWinsLink() {
  return (
    <FA
      name="user"
      size="4x"
      onClick={() => browserHistory.push('/mywins')}
    />
  );
}

MyWinsLink.propTypes = {

};

export default MyWinsLink;
