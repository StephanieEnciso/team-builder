import React from 'react';

function TeamMember(props) {
    const {info} = props

    return (
        <div className = 'teamMember'>
            <h2>{info.name}</h2>
            <p>Email: {info.email}</p>
            <p>Role: {info.role}</p>
        </div>
    )
};

export default TeamMember;