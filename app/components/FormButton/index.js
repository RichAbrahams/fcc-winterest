/**
*
* FormButton
*
*/

import React from 'react';
import { Button } from './styles';


function FormButton(props) {
  return (
    <Button>
      {props.children}
    </Button>
  );
}

FormButton.propTypes = {
  children: React.PropTypes.string,
};

export default FormButton;
