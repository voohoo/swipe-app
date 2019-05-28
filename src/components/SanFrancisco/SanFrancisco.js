import React from 'react';
import Slide from '../Slide/Slide';
import './SanFrancisco.css';

function SanFrancisco(props) {
  return (
    <Slide
      number="2"
      gradient="sf-gradient"
      placeTitle="San Francisco"
      placeSubtitle="California"
      backgroundPhoto="san-francisco"
      viewType={props.match.type}
      index={props.index}
    ></Slide>
  );
}

export default SanFrancisco;