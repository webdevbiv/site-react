import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = (props) => {
    return (
        <div>
            {props.avatarUrl ? <img alt='user avatar' src={props.avatarUrl} /> : 'No image available'}
            <div>{props.name}</div>
        </div>
    )
}

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string
}

export default UserProfile;