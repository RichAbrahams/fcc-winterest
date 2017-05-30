/**
*
* FormLabel
*
*/

import React from 'react';
import { Label } from './styles';


function FormLabel(props) {
  return (
    <Label>
      {props.children}
    </Label>
  );
}

FormLabel.propTypes = {
  children: React.PropTypes.string,
};

export default FormLabel;
