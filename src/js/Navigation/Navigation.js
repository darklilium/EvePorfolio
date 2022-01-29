import React from 'react';
import '../../css/components/_Navigation.scss';

function Navigation () {
    return (
        <nav>
            <li><a className='current' >Home</a></li>
            <li><a>About Me</a></li>
            <li><a>Projects</a></li>
            <li><a>Blog</a></li>
            <li className='specialLi'><a className='specialLink'>Hire Me !</a></li>

        </nav>
    )
}

export {Navigation}