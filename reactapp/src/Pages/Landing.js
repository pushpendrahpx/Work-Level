import React, { Component } from 'react';
import Login from './Login';
import Navbar from '../Components/Navbar';
import Register from './Register';
import HomeAddEmployees from './HomeComponents/HomeAddEmployees';
export default class Landing extends Component{
    render() {
        return <span>
        <Navbar />
        <Login />
        <div className='columns'>
            <div className='column'>
                <Register />
            </div>
            <div className='column'>
                <HomeAddEmployees />
            </div>
        </div>
    </span>;

    }

  
}