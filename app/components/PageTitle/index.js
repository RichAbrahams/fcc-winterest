/**
*
* PageTitle
*
*/

import React from 'react';
import { Title } from './styles';


function PageTitle(props) {
  return (
    <Title className="page-title">
      {props.children}
    </Title>
  );
}

PageTitle.propTypes = {
  children: React.PropTypes.string,
};

export default PageTitle;
