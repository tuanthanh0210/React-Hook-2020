import React from 'react';
import useClock from '../CustomHook/useClock/useClock';



function Clock(props) {
    const {timeString} = useClock()
    return (
        <div style={{fontSize: `42px`, color: `blue`}}>
            {timeString}
        </div>
    );
}

export default Clock;