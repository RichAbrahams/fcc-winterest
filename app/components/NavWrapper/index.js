/**
*
* NavWrapper
*
*/

import React from 'react';
import { Wrapper } from './styles';


function NavWrapper(props) {
  return (
    <Wrapper className="NavWrapper">
      {props.children}
    </Wrapper>
  );
}

NavWrapper.propTypes = {
  children: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]),
};

export default NavWrapper;
