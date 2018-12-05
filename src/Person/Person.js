import React from 'react';
import Radium from 'radium';
import './Person.css';
const person = (props) => {
    const style = {
        '@media (min-width: 500px )' : {
            
                width : '450px'
            
        }
    };
    return (
    <div className="Person" style={style}>
    <p onClick={props.click}>Hai i'm {props.name} and i'm {props.age} years old.</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name}></input>
    </div>
    )
};

export default Radium(person);