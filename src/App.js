import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'abc1', name: 'ekalaya', age: 31 },
      { id: 'def1', name: 'veronika', age: 24 },
      { id: 'ghi1', name: 'ucok', age: 3 }
    ],
    otherState : 'Some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons})
  }

  switchNameHandler = (newName) => {
    //console.log('awesome click!');
    //this.state.persons[0].name = 'Ekalaya Manullang';
    this.setState({
      persons: [
      { name: newName, age: 31 },
      { name: 'veronika', age: 24 },
      { name: 'ucok', age: 13 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundcolor: 'lightgreen',
        color: 'black',
      }
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return <Person 
              click = { () => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} 
              change={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div> 
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black',
      };
    }

    //let clasess = ['red','bold'].join(" ");
    const clasess = [];
    if(this.state.persons.length <= 2){
      clasess.push('red'); // clasess = ['red']
    }
    if(this.state.persons.length <= 1){
      clasess.push('bold'); // clasess = ['bold']
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p className={clasess.join(" ")}>This is really working!!!</p>
        <button 
        style={style} 
        onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
          {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
