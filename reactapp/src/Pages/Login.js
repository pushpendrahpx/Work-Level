import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
export default class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn:false,
            isLoading:false
            
        }

    }
    componentDidMount(){
        if(localStorage.getItem("isLoggedIn") == "true"){
            this.setState({isLoggedIn:true});
        }
    }

    makeAPIrequest = async (url,data)=>{
        let response = await fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        // return response;
        return await response.json();
        
   }

    adminLogin = async (e)=>{
        e.preventDefault();
        this.setState({isLoading:true})
        let { email,password } = e.target;
        // console.log(phone,password)
        let url = 'http://localhost:5000/api/company/login';

        let response = await this.makeAPIrequest(url,{email:email.value,password:password.value});
        console.log(response)
        if(response.statusCode === 200){
            localStorage.setItem("isLoggedIn","true");
            localStorage.setItem("CompanyDetails",JSON.stringify(response.Company))
            this.setState({isLoggedIn:true});
        }
        this.setState({isLoading:false})

    }

    employeeLogin = (e)=>{
        e.preventDefault();

        let { email,password } = e.target;
        // console.log(email,password)
        let url = 'http://localhost:5000/api/employee/login';

        let response = this.makeAPIrequest(url,{email:email.value,password:password.value});
        if(response.statusCode === 200){
            this.setState({isLoggedIn:true});
        }

    }
        render(){

            if(this.state.isLoggedIn == true)
            {return <Redirect to='/home' />; console.log("SD")}
            else
            return <div className='columns'>
            <div className='column'></div>
        <div className='column'>
            <form onSubmit={this.adminLogin} style={{padding:"20px"}}>
        <article className="panel is-primary"> 
            <p className="panel-heading">
            Login Company Admin
            </p>
            {this.state.isLoading == true ? <progress class="progress is-small is-primary" max="100">15%</progress> : ''}
            <div id='Form' style={{margin:'10px',padding:"20px"}}>
                <div className="field">
                <div className="control">
                    <input className="input" type="email" placeholder="Enter your Admin Email" name='email' />
                </div>
                </div>
                {/* Phone */}
                <div className="field">
                    <div className="control">
                        <input className="input" type="password" placeholder="Enter your Password" name='password' />
                    </div>
                </div>
    
                <div className="field is-grouped">
                <div className="control">
                    <button className="button is-primary">Log Me In</button>
                </div>
                </div>
            </div>
        </article>
        </form>
        </div>
            <div className='column'>
                        <form onSubmit={this.employeeLogin} style={{padding:"20px"}}>
                    <article className="panel is-danger"> 
                        <p className="panel-heading">
                        Login Employee Form
                        </p>
                        <div id='Form' style={{margin:'10px',padding:"20px"}}>
                            <div className="field">
                            <div className="control">
                                <input className="input" type="email" placeholder="Enter your Phone Number" name='email' />
                            </div>
                            </div>
                            {/* Phone */}
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="password" placeholder="Enter your Password" name='password' />
                                </div>
                            </div>
    
                            <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-danger" style={{width:'100%'}}>Log Me In</button>
                            </div>
                            </div>
                        </div>
                    </article>
                    </form>
            </div>
            <div className='column'></div>
        </div>;
                
        }


    
}