import React, { Component } from 'react'
import HomeNavbar from './HomeComponents/HomeNavbar'
import HomeLeftActionBar from './HomeComponents/HomeLeftActionBar'
import RightWidgets from './HomeComponents/RightWidgets'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeCentral from './HomeComponents/HomeCentral'
import HomeAddEmployees from './HomeComponents/HomeAddEmployees'
export default class Home extends Component{
    render(){
        return <span><BrowserRouter>
            <HomeNavbar />
            <span>              
                  <div className='columns'>
                <div className='is-narrow'>
                    <div className='box'>
                    <HomeLeftActionBar />
                    </div>
                </div>  
                <div className='column'>
                    {/* Container Block */}
                    <div className='columns'>
                        <div className='column is-9'>
                            <div className='box'>
                                
                                    <Switch>
                                        <Route path='/home/' exact component={HomeCentral} />
                                        <Route path='/home/add/employees' component={HomeAddEmployees} />
                                    </Switch>
                                
                            </div>
                        </div>
                        <div className='column is-3'>
                            <div className='box'>
                                <RightWidgets />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
            </span>
            </BrowserRouter>
        </span>;
    }
}