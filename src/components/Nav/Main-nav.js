import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Nav.css'

function MainNav() {

    const navContent = [
        {
            navElement: "Home",
            path: "/"
        },

        {
            navElement: "About Me",
            path: "/about-me"
        },

        {
            navElement: "Project",
            path: "projects"
        }
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand text-white logo-nav" to="#" id="logo-nav">[D]</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mt-2 ml-auto mt-lg-0">
                    {navContent.map((objectKey, index) => {
                        return (
                            <li className="nav-item active">
                                <Link className="nav-link text-white main-nav-items" to={objectKey.path}> {objectKey.navElement} <span className="sr-only">(current)</span></Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>

    )
}

export default MainNav;