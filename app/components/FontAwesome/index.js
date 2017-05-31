/**
*
* FontAwesome
*
*/

import React from 'react';
import { FA } from './styles';


function FontAwesome({ name, size, color, transform }) {
  return (
    <FA
      name={name}
      size={size}
      color={color}
      transform={transform}
    />
  );
}

FontAwesome.propTypes = {
  name: React.PropTypes.string,
  size: React.PropTypes.string,
  color: React.PropTypes.string,
  transform: React.PropTypes.string,
};

export default FontAwesome;
