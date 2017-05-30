/**
*
* ErrorSpan
*
*/

import React from 'react';
import { Span } from './styles';


function ErrorSpan(props) {
  return (
    <Span>
      {props.children}
    </Span>
  );
}

ErrorSpan.propTypes = {
  children: React.PropTypes.object,
};

export default ErrorSpan;
