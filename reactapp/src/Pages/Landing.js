import React, { Component } from 'react';
import Login from './Login';
import Navbar from '../Components/Navbar';
import Register from './Register';
export default class Landing extends Component{
    render() {
        return <span>
        <Navbar />
        <Login />
        {/* <Register /> */}
    </span>;

    }

  
}