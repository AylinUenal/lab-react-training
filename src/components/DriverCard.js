import React from 'react'

export default function DriverCard(props) {
    return (
        <div>
            <img src={props.img} alt="portrait" style={{width: '70px'}}/>
            <p>  {props.name}</p>
            <p>{props.car.model}</p>
            <p>{props.car.licensePlate}</p>
        </div>
    )
}
