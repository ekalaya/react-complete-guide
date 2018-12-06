import React from 'react';
import clasess from './Person.css';
const person = (props) => {
    
    return (
    <div className={clasess.Person}>
    <p onClick={props.click}>Hai i'm {props.name} and i'm {props.age} years old.</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name}></input>
    </div>
    )
};

export default person;