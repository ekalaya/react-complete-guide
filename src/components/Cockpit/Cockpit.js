import React from 'react';
import clasess from './Cockpit.css';
import Aux from '../../hoc/Aux';
const cockpit = (props) => {
    //let clasess = ['red','bold'].join(" ");
    const assignedClasess = [];
    let btnClass = clasess.Button;

    if(props.showPersons){
        btnClass = [clasess.Button, clasess.Red].join(' ');
    }
    
    if(props.persons.length <= 2){
        assignedClasess.push(clasess.red); // clasess = ['red']
    }

    if(props.persons.length <= 1){
        assignedClasess.push(clasess.bold); // clasess = ['bold']
    }
    
    return (
        <Aux>
          <h1>{props.appTitle}</h1>
          <p className={assignedClasess.join(" ")}>This is really working!!!</p>
          <button className={btnClass}
          onClick={props.clicked}>Toggle Persons</button>
          <button onClick={props.login}>Log in</button>
       </Aux>
      );
};

export default cockpit;