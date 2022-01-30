import React from 'react';

import '../../css/components/_IntroText.scss';

import arrowDown from '../../css/img/icons/arrow_down.svg';

function IntroText () {
    return (
        <div className='introText'>
            <p>Evelyn Hernández</p>
            <h2>Frontend Developer</h2>
            
            <img src={arrowDown}></img>
        </div>

    )
}

export {IntroText};