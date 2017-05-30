/**
*
* FontAwesome
*
*/

import React from 'react';
import { FA } from './styles';


function FontAwesome({ name, size, color }) {
  return (
    <FA
      name={name}
      size={size}
      color={color}
    />
  );
}

FontAwesome.propTypes = {
  name: React.PropTypes.string,
  size: React.PropTypes.string,
  color: React.PropTypes.string,
};

export default FontAwesome;
