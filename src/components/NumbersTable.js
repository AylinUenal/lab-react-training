import React from 'react'

export default function NumbersTable(props) {

    const limit = [props.limit];

    console.log(props.limit)
    
    return (
        <div>
            <li>{props.limit}</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </div>
    )
}
