/**
*
* MessageText
*
*/

import React from 'react';
import { Text } from './styles';


function MessageText(props) {
  return (
    <Text>
      {props.children}
    </Text>
  );
}

MessageText.propTypes = {
  children: React.PropTypes.string,
};

export default MessageText;
