import React from 'react';
import { featuresRender } from './features';

export const partsRender = part => {
    return (
        <div key={part.id}>
            <p className="lead">Part: {part.name}</p>
            <div className="card-columns">
                {part.features.map(feat => featuresRender(feat))}
            </div>
        </div>
    );
}
