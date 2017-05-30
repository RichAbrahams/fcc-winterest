/**
*
* FormTitle
*
*/

import React from 'react';
import { Title } from './styles';


function FormTitle(props) {
  return (
    <Title>
      {props.children}
    </Title>
  );
}

FormTitle.propTypes = {
  children: React.PropTypes.string,
};

export default FormTitle;
