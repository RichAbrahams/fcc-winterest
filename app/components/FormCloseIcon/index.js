/**
*
* FormCloseIcon
*
*/

import React from 'react';
import { FA } from './styles';


function FontAwesome({ name, size, color, transform, toggleAddWin }) {
  return (
    <FA
      name={name}
      size={size}
      color={color}
      transform={transform}
      onClick={() => toggleAddWin()}
    />
  );
}

FontAwesome.propTypes = {
  name: React.PropTypes.string,
  size: React.PropTypes.string,
  color: React.PropTypes.string,
  transform: React.PropTypes.string,
  toggleAddWin: React.PropTypes.func,
};

export default FontAwesome;
