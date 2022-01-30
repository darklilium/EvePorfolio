import React from 'react';

import {Logo} from '../Logo/Logo';
import {Navigation} from '../Navigation/Navigation';
import {SocialMedia} from '../SocialMedia/SocialMedia';
import {IntroText} from '../IntroText/IntroText';


import '../../css/abstracts/_globals.scss';
import '../../css/components/_Portfolio.scss';

function PortFolio() {
  return (
    <div>
      <div className='background'>
        { /* <img className="background__image" src={image} alt='hero img'></img>  */}
      </div>
      <header>
        <Logo />
        <Navigation />
      </header>
      
       
        <SocialMedia />
        <IntroText />
    </div>

  );
}

export default PortFolio;
