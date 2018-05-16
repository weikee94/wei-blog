import React from 'react';
import { NavLink } from 'react-router-dom';

const Archives = (props) => {
    return (
        <div className="blog-archives">
            <ul>
                <NavLink className="blog-archives__subtitle" to="/archives/1">
                    <li style={{textDecoration: 'underline'}}>
                        <span>Init React Project</span>
                    </li>
                </NavLink>
                <NavLink className="blog-archives__subtitle" to="/archives/2">
                    <li style={{textDecoration: 'underline'}}>
                        <span>Tools Using</span>
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Archives;