import React, { Component } from 'react'

class HomeAddEmployees extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className='columns'>
                <div className='column is-3'></div>
                <div className='column is-6'>
                    <form onSubmit={this.UserForm} style={{padding:"20px"}}>
                <article class="panel is-link"> 
                    <p class="panel-heading">
                        Add Employee
                    </p>
                    <div id='Form' style={{margin:'10px',padding:"20px"}}>
                        <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="Enter your Employee name" name='name'/>
                        </div>
                        </div>
                        {/* Phone */}
                        <div class="field">
                            <div class="control">
                                <input class="input" type="number" placeholder="Enter your Employee Phone Number" name='phone' />
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
                            <input class="input" type="email" placeholder="Enter Employee Email ID" name='email'/>
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
                                <input class="input" type="password" placeholder="Enter your Employee Password" name='password' value='Password' />
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
                <div className='column is-3'></div>
            </div>
        )
    }
}

export default HomeAddEmployees
