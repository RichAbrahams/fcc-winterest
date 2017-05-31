/**
*
* FormCloseWrapper
*
*/

import React from 'react';
import { Wrapper } from './styles';

function FormCloseWrapper(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

FormCloseWrapper.propTypes = {
  children: React.PropTypes.object,
};

export default FormCloseWrapper;
