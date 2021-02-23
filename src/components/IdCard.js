import React from 'react';


export default function IdCard(props) {
    return (
        <div>
            <div>
            <h3>First Name: {props.firstName }</h3>
            <h3>Last Name: {props.lastName }</h3>
            <h3>Gender: {props.gender }</h3>
            <h3>Height: {props.height } cm</h3>
            <h3>Birth: {props.birth.toLocaleDateString()}</h3>
            <img src={props.picture} style={{ width: '200px' }} alt="profile" />
            </div>
        </div>
    )
}

