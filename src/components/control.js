import React from 'react'

export const controlRender = (control) => (
    <tr key={control.name}>
        <th>{control.name}</th>
        <th>{control.dev}</th>
        <th>{control.devot}</th>
    </tr>
)

export default controlRender;