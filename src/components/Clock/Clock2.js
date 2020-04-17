import React from 'react';
import useClock from '../CustomHook/useClock/useClock';

export default function Clock2 () {
  const {timeString} = useClock ();

  return <p style={{fontSize: `42px`, color: `red`}}>{timeString}</p>;
}
