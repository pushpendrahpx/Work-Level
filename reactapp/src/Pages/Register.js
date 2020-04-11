import React, { Component } from 'react';
export default class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            UserRegistrationForm:{

            }
        }
    }
    makeAPIrequest = async (url,data)=>{
        // console.log(data)
        let response = await fetch(url,
                            {   method:"POST",
                                headers:{
                                    'content-type':'application/json'
                                },
                                body:JSON.stringify(data)
                            });
        let result = await response.json();

        return result;
    }
    UserForm = async (e)=>{
        e.preventDefault();

        let {name,phone,email,password,line1,line2,city,state,country} = e.target;
        let url = 'http://localhost:5000/api/company/register';
        let data = {
            name:name.value,
            phone:phone.value,
            email:email.value,
            address:{
                line1:line1.value,
                line2:line2.value,
                city:city.value,
                state:state.value,
                country:country.value
            },
            admin:{
                adminEmail:email.value,
                adminPassword:password.value
            }
        }
        let d = await this.makeAPIrequest(url,data);
        
        
    }

    CompanyForm = (e)=>{
        e.preventDefault();
        let {name,phone,email,password,line1,line2,city,state,country} = e.target;

    }
    render(){
        if(this.state.isVerified){
            return ;
        }else{
            return <div class="columns">
            <div className='column'></div>
        <div class="column">
            <form onSubmit={this.UserForm} style={{padding:"20px"}}>
            <article class="panel is-link"> 
                <p class="panel-heading">
                    Company Registration
                </p>
                <div id='Form' style={{margin:'10px',padding:"20px"}}>
                    <div class="field">
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter your Company name" name='name' value='Facebook LLC' />
                    </div>
                    </div>
                    {/* Phone */}
                    <div class="field">
                        <div class="control">
                            <input class="input" type="number" placeholder="Enter your Company Phone Number" name='phone' />
                        </div>
                    </div>

                    {/* <div class="field">
                    <label class="label">Username</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-success" type="text" placeholder="Text input" value="bulma" />
                        <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                        </span>
                    </div>
                    <p class="help is-success">This username is available</p>
                    </div> */}

                    <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Enter your Company/Admin Email ID" name='email'/>
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        {/* <span class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle"></i>
                        </span> */}
                    </div>
                    {/* <p class="help is-danger">This email is invalid</p> */}
                    </div>

                    
                    {/* Password */}
                    <div class="field">
                        <div class="control">
                            <input class="input" type="password" placeholder="Enter your Admin Password" name='password' value='Password' />
                        </div>
                    </div>
                    <label style={{fontSize:'20px',fontWeight:"400"}}>Address</label>
                    <div class="field">
                        
                        <div class="control">
                            <input class="input" type="text" placeholder=" Company Address Line1" name='line1' value='B-30 Shivam Society' />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder=" Company Address Line2" name='line2' value='Near Jambuva Jakat Naka Makarpura' />
                        </div>
                    </div>
                    <div className='columns'>
                        <div className='column'>
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" placeholder="Enter City" name='city' value='Vadodata' />
                                </div>
                            </div>
                        </div>
                        
                        <div className='column'>
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" placeholder="Enter your State" name='state' value='Gujrata' />
                                </div>
                            </div>
                        </div>
                        
                        <div className='column'>
                            <div class="field">
                                <div class="control">
                                    <input class="input" type="text" placeholder="Enter your Country" name='country' value="India" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    </div>
                </div>
            </article>
            </form>
        </div>
        <div className='column'>

        </div>
    </div>;
        }
    }
}