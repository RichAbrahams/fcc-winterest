/**
*
* ContentWrapper
*
*/

import React from 'react';
import { Wrapper } from './styles';


function ContentWrapper(props) {
  return (
    <Wrapper className="content-wrapper">
      {props.children}
    </Wrapper>
  );
}

ContentWrapper.propTypes = {
  children: React.PropTypes.object,
};

export default ContentWrapper;
