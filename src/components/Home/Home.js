import React from 'react';
import Header from './Header';
import Projects from '../Projects/Projects'
import AboutMe from '../About-me/About-Me'


function Home() {

    return (
        <div>
            <Header />
            <AboutMe />
            <Projects />
        </div>
    )
}

export default Home