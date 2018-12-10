import React, { Component } from 'react';
import clasess from './Person.css';
import Aux from '../../../hoc/Aux';
import theClass from '../../../hoc/theClass';

class Person extends Component {
    render () {
        return (
            <Aux>
            <p onClick={this.props.click}>Hai i'm {this.props.name} and i'm {this.props.age} years old.</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.change} value={this.props.name}></input>
            </Aux>
        )
           // return [
             //   <p key="1" onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} years old.</p>,
               // <p key="2">{this.props.children}</p>,
                //<input key="3" type="text" onChange={this.props.change} value={this.props.name}></input>
            //]   
    }
}

export default theClass(Person, clasess.Person);