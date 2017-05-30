/**
*
* MainContent
*
*/

import React from 'react';
import Masonry from 'react-masonry-component';

function MainContent(props) {
  // const winItems = props.wins.map((item, index) => <WinContainer key={index} win={item} {...props} />);
  const masonryOptions = {
    transitionDuration: 200,
    fitWidth: true,

  };
  return (
    <Masonry
      className={'my-gallery-class'} // default ''
      elementType={'div'} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false}
    >
      {props.children}
    </Masonry>
  );
}

MainContent.propTypes = {
  children: React.PropTypes.array,
};

export default MainContent;

