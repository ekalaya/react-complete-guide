import React, { Component } from 'react';
import clasess from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;
    
    if (this.state.showPersons){
      persons = 
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler}
          />;
      
    }

   
    return (
      <div className={clasess.App}>
      <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
      />
      
       {persons}
      </div>
    );
  }
}

export default App;
