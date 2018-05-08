import React from 'react';
import { NavLink } from 'react-router-dom';

const Archives = (props) => {
    console.log(props);
    return (
        <div>
            <NavLink to="/archives/1">Item One</NavLink>
            <NavLink to="/archives/2">Item Two</NavLink>
        </div>
    );
};

export default Archives;