import React from 'react';
import Confetti from 'react-confetti'

const ConfettiElement = ({ width, height }) => {
    return (
        <Confetti
            width={width}
            height={height}
        />
    )
}

export default ConfettiElement