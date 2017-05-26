/**
*
* MainContent
*
*/

import React from 'react';
// import styled from 'styled-components';


function MainContent({ wins }) {
  const winItems = wins.map((item, index) => <p key={index}>{item.get('title')}</p>);
  return (
    <div>
      {winItems}
    </div>
  );
}

MainContent.propTypes = {

};

export default MainContent;
