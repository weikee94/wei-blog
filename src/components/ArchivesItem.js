import React from 'react';
import { NavLink } from 'react-router-dom';

const ArchivesItem = (props) => {
    console.log(props);
    return (
        <div>
            Archives with id of {props.match.params.id}
            <NavLink to="/archives">Go Back</NavLink>
        </div>
    );
};

export default ArchivesItem;