import React from 'react';
import { Link } from 'react-router-dom';


function Main() {

    return (
        <>
            <h1>Project Partner</h1>
            <p>This site helps you with your crochet or knit projects. Very easy to use. Can input your own project, or find one already uploaded.</p>
            <h2>Get started</h2>
            <ul>
                <li><Link to='/Projects'>Find a project</Link></li>
                <li><Link to ='/Input'>Input a project</Link></li>
            </ul>
        </>
    )
};

export default Main;
