import React, { useState, useEffect } from 'react'

const Timer = ({ nextQuestion }) => {

    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => { setSeconds(seconds - 1) }, 1000);
        } else {
            setSeconds(60)
            nextQuestion()
        }
    }, [seconds])


    return (
        <div className='timer'>
            {seconds}
        </div>
    );
};

export default Timer
