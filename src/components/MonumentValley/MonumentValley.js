import React from 'react';
import Slide from '../Slide/Slide';
import './MonumentValley.css';

function MonumentValley(props) {
  return (
    <Slide
      number="3"
      gradient="mv-gradient"
      placeTitle="Monument Valley"
      placeSubtitle="Arizona"
      backgroundPhoto="monument-valley"
      viewType={props.match.type}
      index={props.index}
    ></Slide>
  );
}

export default MonumentValley;