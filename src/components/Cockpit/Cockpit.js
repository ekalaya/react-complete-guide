import React from 'react';
import clasess from './Cockpit.css'
const cockpit = (props) => {
    //let clasess = ['red','bold'].join(" ");
    const assignedClasess = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = clasess.Red;
    }
    
    if(props.persons.length <= 2){
        assignedClasess.push(clasess.red); // clasess = ['red']
    }

    if(props.persons.length <= 1){
        assignedClasess.push(clasess.bold); // clasess = ['bold']
    }
    
    return (
        <div>
          <h1>Hi, i'm a React App</h1>
          <p className={assignedClasess.join(" ")}>This is really working!!!</p>
          <button className={btnClass}
          onClick={props.clicked}>Toggle Persons</button>
       </div>
      );
};

export default cockpit;