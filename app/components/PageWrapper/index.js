/**
*
* PageWrapper
*
*/

import React from 'react';
import { Wrapper } from './styles';


function PageWrapper(props) {
  return (
    <Wrapper className="page-wrapper">
      {props.children}
    </Wrapper>
  );
}

PageWrapper.propTypes = {
  children: React.PropTypes.array,
};

export default PageWrapper;
