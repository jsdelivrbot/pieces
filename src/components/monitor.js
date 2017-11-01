import React, { Component } from 'react';
import { partsRender } from './parts';

const Monitor = (props) => {
    return (
        <div>
            <p className='small text-muted'>
                This is the time of the values: {props.date ? props.date : '*** please wait a few seconds for the results ***'}
            </p>
            <div>
                {props.parts ? props.parts.map(part => partsRender(part)) : ''}
            </div>
        </div>
    );
}

export default Monitor;