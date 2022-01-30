import React from 'react';

import facebook from '../../css/img/icons/facebook.svg';
import twitter from '../../css/img/icons/twitter.svg';
import linkedin from '../../css/img/icons/linkedin.svg';
import github from '../../css/img/icons/github.svg';

import '../../css/components/_SocialMedia.scss';


function SocialMedia (){
    return (
        <div className='SocialMedia'>
            <a href='https://www.facebook.com/24Desires.E'><img src={facebook}></img></a>
            <a href='https://twitter.com/EvelynnH_'><img src={twitter}></img></a>
            <a href='https://www.linkedin.com/in/ehernanr/'><img src={linkedin}></img></a>
            <a href='https://github.com/darklilium'><img src={github}></img>!</a>
        </div>
    )
}

export {SocialMedia};