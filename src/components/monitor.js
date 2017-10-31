import React, { Component } from 'react';

const Monitor = (props) => {
    return (
        <div>
            <p className='small text-muted'>
                This is the time of the values: {props.date}
            </p>
            <div>
            { props.parts ? props.parts.map(part => partsRender(part)) : ''}
            </div>
        </div>
    );
}

const partsRender = part => {
    return (
        <div className="card-deck">
           Part: {part.name}
        </div>
    );
}

export default Monitor;