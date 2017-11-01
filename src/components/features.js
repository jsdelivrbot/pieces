import React from 'react';
import controlRender from  './control';

export const featuresRender = feat => {
    return (
        <div className="card" key={feat.id}>
            <div className="card-inverse card-primary">
                <p className="card-title text-white">
                    {feat.name}
                </p>
            </div>
            <div className="card-block">
                <table>
                    <thead>
                        <tr>
                            <th>Control</th>
                            <th>Dev</th>
                            <th>Dev Out Tol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feat.controls.map( control => controlRender(control) )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}