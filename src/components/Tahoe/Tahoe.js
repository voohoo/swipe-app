import React from 'react';
import Slide from '../Slide/Slide';
import './Tahoe.css';

function Tahoe(props) {
  return (
    <Slide
      number="1"
      gradient="tahoe-gradient"
      placeTitle="Lake Tahoe"
      placeSubtitle="Nevada"
      backgroundPhoto="tahoe"
      viewType={props.match.type}
      index={props.index}
    ></Slide>
  );
}

export default Tahoe;