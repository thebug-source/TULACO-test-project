import React from 'react';
import './Error.scss';

export default function Error(props) {
    const { error } = props;
    return (
        <div className='error'>
            <span>{error.message}</span>
        </div>
    );
}