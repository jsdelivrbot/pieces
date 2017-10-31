import React, { Component } from 'react';

const Monitor = (props) => {
    return (
        <div>
            <p className='small text-muted'>
                This is the time of the values: {props.date}
            </p>
            <div>
                {props.parts ? props.parts.map(part => partsRender(part)) : ''}
            </div>
        </div>
    );
}

const partsRender = part => {
    return (
        <div>
            <p className="lead">Part: {part.name}</p>
            <div className="card-columns">
                {part.features.map(feat => featuresRender(feat))}
            </div>
        </div>
    );
}

const featuresRender = feat => {
    return (
        <div className="card">
            <div className="card-inverse card-primary">
                <p className="card-title text-white">
                    {feat.name}
                </p>
            </div>
        </div>
    );
}

export default Monitor;