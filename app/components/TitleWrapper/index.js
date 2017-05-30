/**
*
* TitleWrapper
*
*/

import React from 'react';
import { Wrapper } from './styles';


function TitleWrapper(props) {
  return (
    <Wrapper className="title-wrapper">
      {props.children}
    </Wrapper>
  );
}

TitleWrapper.propTypes = {
  children: React.PropTypes.array,
};

export default TitleWrapper;
