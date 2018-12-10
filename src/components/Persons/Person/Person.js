import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clasess from './Person.css';
import Aux from '../../../hoc/Aux';
import theClass from '../../../hoc/theClass';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor( props ) {
        super( props );
        console.log ( '[Person.js] Inside Consructor', props);
        this.inputElemet = React.createRef();
    }
    
    componentDidMount () {
        console.log( '[Person.js] Inside componentDidMount()')       
        if (this.props.position === 0) {
            this.inputElemet.current.focus();
        } 
    }

    focus(){
            this.inputElemet.current.focus();
    }

    render () {
        return (
            <Aux>
                <AuthContext.Consumer>
                {auth => auth ? <p>I'm authenticated!!</p> : null}
                </AuthContext.Consumer>
            <p onClick={this.props.click}>Hai i'm {this.props.name} and i'm {this.props.age} years old.</p>
            <p>{this.props.children}</p>
            <input 
            ref = {this.inputElemet}
            type="text" 
            onChange={this.props.change} 
            value={this.props.name}></input>
            </Aux>
        )
           // return [
             //   <p key="1" onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} years old.</p>,
               // <p key="2">{this.props.children}</p>,
                //<input key="3" type="text" onChange={this.props.change} value={this.props.name}></input>
            //]   
    }
}

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default theClass(Person, clasess.Person);