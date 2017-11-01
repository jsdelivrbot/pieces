import React from 'react';
import controlRender from  './control';

const cardcolor = (feat) => {
    const checker = feat.controls[Math.floor((feat.controls.length - 1) / 2)].dev;
    switch (true) {
        case checker <= 3:
            return "card-success";
        case checker <= 6:       
            return "card-warning";        
        case checker <= 10:              
            return "card-danger"
    }
}

export const featuresRender = feat => {

    return (
        <div className="feat" key={feat.id}>
            <div className={"card-inverse " +  cardcolor(feat) }>
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