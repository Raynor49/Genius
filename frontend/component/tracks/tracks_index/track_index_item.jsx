import React from 'react';
import {Link} from 'react-router-dom';

const TrackIndexItem = (props) => {
  // debugger
  return(
    <li className='track-item'>
      <div className='track-idx-num'>{props.idx + 1}</div>
      <div className='track-idx-title'>{props.track.title}</div>
      <div className='track-idx-artist'>{props.track.artist}</div>
    </li>
  );
};

export default TrackIndexItem;
