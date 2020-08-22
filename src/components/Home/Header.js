import React from 'react';
import MainNav from '../Nav/Main-nav'

function Header() {
    return (
        <header className="header-home">
            <MainNav />

            <div className="i-am">
                <p>Hi! <br></br>
                My name is <strong>Duanny Matos</strong> and I'm a <br></br>
                Software Engineer</p>
            </div>

            <div className="check-out">
                <p>Check-out what I do!</p>
                <ion-icon name="arrow-down-circle-outline"></ion-icon>
            </div>


        </header>
    )
}

export default Header