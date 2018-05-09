import React from 'react';
import { NavLink } from 'react-router-dom';

const ArchivesItem = (props) => {
    console.log(props);
    return (
        <div className="blog-archives-items">
            Archives with id of {props.match.params.id}
            <NavLink className="back-home" to="/archives">
                <div className="back-home_title">Go Back</div>
            </NavLink>
        </div>
    );
};

export default ArchivesItem;