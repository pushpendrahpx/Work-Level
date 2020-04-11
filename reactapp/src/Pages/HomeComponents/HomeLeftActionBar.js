import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeLeftActionBar extends Component {

    componentDidUpdate(){
        console.log("updated")
    }

    render(){
        return (
            <div>
                <aside className="menu" >
                        <p className="menu-label" style={{fontSize:'30px'}}>
                            General
                        </p>
                        <ul className="menu-list">
                            <li><Link to='/home/' className='is-active'>Dashboard</Link></li>
                            
                            <li><Link to='/home/employees'>Employees</Link></li>
                        </ul>
                        <p className="menu-label">
                            Administration
                        </p>
                        <ul className="menu-list">
                            <li><a>Company Settings</a></li>
                            <li>
                            <a className="">Manage Your Company Members</a>
                            <ul>
                                <li><a>Employees</a></li>
                                <li><Link to='/home/add/employees'>Add Employee</Link></li>
                            </ul>
                            </li>
                            <li><a>Work</a></li>
                            <li><a>Assign Work</a></li>
                            <li><a>Pending/Completed Work</a></li>
                        </ul>
                        <p className="menu-label">
                            Transactions
                        </p>
                        <ul className="menu-list">
                            <li><a>Company Payments</a></li>
                            <li><a>Company Balance</a></li>
                        </ul>
                        </aside>
            </div>
        )
    }
}

export default HomeLeftActionBar;
