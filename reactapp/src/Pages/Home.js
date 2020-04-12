import React, { Component } from 'react'
import HomeNavbar from './HomeComponents/HomeNavbar'
import HomeLeftActionBar from './HomeComponents/HomeLeftActionBar'
import RightWidgets from './HomeComponents/RightWidgets'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import HomeCentral from './HomeComponents/HomeCentral'
import HomeAddEmployees from './HomeComponents/HomeAddEmployees'
import socketIOClient from "socket.io-client";


export default class Home extends Component{
    constructor(props){
        super(props)

        
        this.state = {
            isLoggedIn:true
        }

        

    }
    componentDidMount(){
        // Installing Sockets Rules for Clients
        this.socket = socketIOClient("http://localhost:5000");

        // this.socket.on('notifications',)


        if(localStorage.getItem("isLoggedIn") === "true"){
            let CompanyInString = localStorage.getItem("CompanyDetails");
            let Company = JSON.parse(CompanyInString);
            console.log(Company)
        }else{
            localStorage.removeItem("CompanyDetails");
            
            this.setState({isLoggedIn:false});
            
        }

    }
    render(){
        if(this.state.isLoggedIn){
            return <span><BrowserRouter>
            <HomeNavbar />
            <span>         
                    
                  <div className='columns'>
                <div className='is-narrow'>
                    <div className='box'>
                    {/* <button onClick={()=>{
                    
                    this.socket.emit('logged',{name:"PpopiuPushpendra"})
                            }}>dsf</button>  */}
                    <HomeLeftActionBar />
                    </div>
                </div>  
                <div className='column'>
                    {/* Container Block */}
                    <div className='columns'>
                        <div className='column is-9'>
                                
                                    <Switch>
                                        <Route path='/home/' exact component={HomeCentral} />
                                        <Route path='/home/add/employees' component={HomeAddEmployees} />
                                    </Switch>
                                
                           
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
        }else{
            return <Redirect to='/' />
        }
    }
}