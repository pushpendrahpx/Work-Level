import React, { Component } from 'react'
import './Profile.css'
class ProfileSection extends Component {
    constructor(){
        super()
        this.state = {
            name:"",
            isLoading:true
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({...this.state, name: nextProps.name,isLoading:false });  
      }
    render() {
        return (<span>
            <div class="section profile-heading" style={{background:'white'}}>
        <div class="columns is-mobile is-multiline">
            
        {this.state.isLoading === true ? <progress class="progress is-small is-primary" max="100">15%</progress>:''}
          <div class="column is-2">
              
            <span class="header-icon user-profile-image">
              <img style={{borderRadius:"50%"}} src="https://static.wixstatic.com/media/27f7a3_4944f48a919d4e028e9d8153fe314c68~mv2.jpg/v1/fill/w_140,h_140,al_c,q_80,usm_0.66_1.00_0.01/73281629_727938637673237_203890694347659.webp"/>
            </span> 
          </div>
          <div class="column is-4-tablet is-10-mobile name">
            <p>
              <span class="title is-bold">{this.state.name}</span>
              <br/>
            </p><br /><br />
            <p class="tagline">
              Company - Google LLC
            </p>
          </div>
          <div class="column is-2-tablet is-4-mobile has-text-centered">
            <p class="stat-val">30</p>
            <p class="stat-key">searches</p>
          </div>
          <div class="column is-2-tablet is-4-mobile has-text-centered">
            <p class="stat-val">10</p>
            <p class="stat-key">likes</p>
          </div>
          <div class="column is-2-tablet is-4-mobile has-text-centered">
            <p class="stat-val">3</p>
            <p class="stat-key">lists</p>
          </div>
        </div>
      </div>
                <div class="profile-options is-fullwidth">
                <div class="tabs is-fullwidth is-medium">
                  <ul>
                    <li class="link">
                      <a>
                        <span class="icon">
                          <i class="fa fa-list"></i>
                        </span>
                        <span>My Lists</span>
                      </a>
                    </li>
                    <li class="link is-active">
                      <a>
                        <span class="icon">
                          <i class="fa fa-thumbs-up"></i>
                        </span>
                        <span>My Likes</span>
                      </a>
                    </li>
                    <li class="link">
                      <a>
                        <span class="icon">
                          <i class="fa fa-search"></i>
                        </span>
                        <span>My Searches</span>
                      </a>
                    </li>
                    <li class="link">
                      <a>
                        <span class="icon">
                          <i class="fa fa-balance-scale"></i>
                        </span>
                        <span>Compare</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
        </span>
        )
    }
}

export default ProfileSection
