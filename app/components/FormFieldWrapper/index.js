/**
*
* FormFieldWrapper
*
*/

import React from 'react';
import { Wrapper } from './styles';


function FormFieldWrapper(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

FormFieldWrapper.propTypes = {
  children: React.PropTypes.array,
};

export default FormFieldWrapper;
