import React, { PureComponent } from 'react';
import clasess from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import theClass from '../hoc/theClass';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'abc1', name: 'ekalaya', age: 31 },
        { id: 'def1', name: 'veronika', age: 24 },
        { id: 'ghi1', name: 'ucok', age: 3 }
      ],
      otherState : 'Some other value',
      showPersons: false,
      toggleClicked: 0
    };
  }

  componentWillMount (){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount (){
      console.log('[App.js] Inside componentDidMount()');
  }

  //shouldComponentUpdate (nextProps, nextState){
    //console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //return nextState.persons !== this.state.persons ||
    //nextState.showPersons !== this.state.showPersons;
  //}

  componentWillUpdate (nextProps, nextState){
      console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);        
  }

  componentDidUpdate (){
      console.log('[UPDATE App.js] Inside componentDidUpdate()');       
  }
  //state = {
    //persons: [
    //  { id: 'abc1', name: 'ekalaya', age: 31 },
    //  { id: 'def1', name: 'veronika', age: 24 },
    //  { id: 'ghi1', name: 'ucok', age: 3 }
    //],
    //otherState : 'Some other value',
    //showPersons: false
  //}

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
    this.setState(( prevState, props ) => {
      return {
      showPersons : !doesShow,
      toggleClicked : prevState.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  render() {
    console.log('[App.js] Inside render');
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
      <Aux>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
      <Cockpit
        appTitle = {this.props.title} 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
      />

       {persons}
      </Aux>
    );
  }
}

export default theClass(App, clasess.App);
