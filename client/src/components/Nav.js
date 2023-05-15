import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

    function showNavigation() {
        // Basically, show Home, Projects, Login/SingUp. If logged in, view SingOut, Favorites, Input Project
        if (Auth.loggedIn()) {
            return (
                <div>
                    <ul>
                        <li>Projects</li>
                        <li>Terminology</li>
                        <li>Favorites</li>
                        <li>Logout</li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <ul>
                        <li>Projects</li>
                        <li>Terminology</li>
                        <li>Login</li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            )
        }
    }

    return (
        <nav>
            {showNavigation()}
        </nav>
    );
}

export default Nav;
