import React from 'react'


export default function CreditCard(props) {
    return (
        <div className="credit-card-container">
            <div className="credit-card">
            <img src={props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'} style={{width: '100px'} } alt="card logo"/>
            {props.number}
            <p>Expires: {props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
            </div>
        </div>
    )
}
