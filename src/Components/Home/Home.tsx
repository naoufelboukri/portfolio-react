import React from 'react';

import '../../Fonts/post-no-bills-colombo/PostNoBillsColombo-Bold.woff';
import './Home.scss';
import Presentation from './Presentation/Presentation';
import Me from './Me/Me';
import LastProjects from './LastProjects/LastProjects';

const Home = () => {
    return (
        <div className='Home'>
            <Presentation></Presentation>
            <Me></Me>
            <LastProjects></LastProjects>
        </div>
    );
}

export default Home;