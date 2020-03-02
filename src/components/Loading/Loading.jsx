
import React from 'react';
import './Loading.scss';

export default function Loading(props) {
    const { text } = props;
    return (
        <div className="fill">
            <div className='loading'>
                <span>{text} Please wait.</span>
            </div>
        </div>
    );
}