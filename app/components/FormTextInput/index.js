/**
*
* FormTextInput
*
*/

import React from 'react';
import { Input } from './styles';

function FormTextInput(props) {
  return (
    <Input>
      {props.children}
    </Input>
  );
}

FormTextInput.propTypes = {
  children: React.PropTypes.object,
};

export default FormTextInput;
