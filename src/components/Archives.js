import React from 'react';
import { NavLink } from 'react-router-dom';

const Archives = (props) => {
    console.log(props);
    return (
        <div className="blog-archives">
            <ul>
                <NavLink className="blog-archives__subtitle" to="/archives/1">
                    <li>
                        <span>Item One</span>
                    </li>
                </NavLink>
                <NavLink className="blog-archives__subtitle" to="/archives/2">
                    <li>
                        <span>Item Two</span>
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Archives;