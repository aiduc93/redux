import React, { Component } from "react";
import {Input} from './Input';
export default class Header extends Component {
    render() {
      return (
        <header>
            <h1>Todos</h1>
            <Input 
                placeholder='What needs to be done?' 
            />
        </header>
      )
    }
} 