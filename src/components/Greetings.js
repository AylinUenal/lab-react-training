import React from 'react'

export default function Greetings(props) {
    let greet;
    switch (props.lang) {
        case 'de':
            greet = 'Hallo'
            break;
        
        case 'en':
            greet= 'Hello'    
            break;
        
        case 'es':
            greet= 'Hola'
            break;
        
        case 'fr':
            greet= 'Bonjour'
            break;
        
        default:
            greet= 'Hello'  
            break;
    }
    return (
        <div>
            <p>{greet} {props.children }</p>
            
        </div>
    )
}

