/**
*
* FormWrapper
*
*/

import React from 'react';
import { Wrapper } from './styles';


function FormWrapper(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

FormWrapper.propTypes = {
  children: React.PropTypes.array,
};

export default FormWrapper;
