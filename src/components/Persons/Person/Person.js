import React, { Component } from 'react';
import clasess from './Person.css';

class Person extends Component {
    render () {
        return (
            <div className={clasess.Person}>
            <p onClick={this.props.click}>Hai i'm {this.props.name} and i'm {this.props.age} years old.</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.change} value={this.props.name}></input>
            </div>
        )
           // return [
             //   <p key="1" onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} years old.</p>,
               // <p key="2">{this.props.children}</p>,
                //<input key="3" type="text" onChange={this.props.change} value={this.props.name}></input>
            //]   
    }
}

export default Person;