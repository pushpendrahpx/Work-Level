import React, { Component } from 'react'
import './Profile.css';
import ProfileSection from './ProfileSection';
import SearchInProfile from './SearchInProfile';

class Profile extends Component {
    constructor(props) {
        super(props) 
        const { email } = props.match.params
        
        this.state = {
            searchFor:email,
            user:{}
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
    async componentDidMount(){
        let url = 'http://localhost:5000/api/Employee/'+this.state.searchFor;
        let response = await this.makeAPIrequest(url,{});
        console.log(response)
        this.setState({
            user:response
        })
    }

    render() {
        return (<div class="columns">
        <div class="container profile">
         
          
        <ProfileSection name={this.state.user.name} />
        <SearchInProfile />
          <div class="columns is-mobile">
            <div class="column is-3-tablet is-6-mobile">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="http://placehold.it/300x225"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <span class="tag is-dark subtitle">#1</span>
                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item">Compare</a>
                  <a class="card-footer-item">Share</a>
                  <a class="card-footer-item">Delete</a>
                </footer>
              </div>
              <br/>
            </div>
            <div class="column is-3-tablet is-6-mobile">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="http://placehold.it/300x225"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <span class="tag is-dark subtitle">#2</span>
                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item">Compare</a>
                  <a class="card-footer-item">Share</a>
                  <a class="card-footer-item">Delete</a>
                </footer>
              </div>
              <br/>
            </div>
            <div class="column is-3">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="http://placehold.it/300x225"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <span class="tag is-dark subtitle">#3</span>
                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item">Compare</a>
                  <a class="card-footer-item">Share</a>
                  <a class="card-footer-item">Delete</a>
                </footer>
              </div>
              <br/>
            </div>
            <div class="column is-3">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="http://placehold.it/300x225"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <span class="tag is-dark subtitle">#4</span>
                    <p>Personal Notes on the Property (can be edited and saved automatically by clicking in and clicking out of text area) - these are unique to the user - they will show up as part of a saved listings' info here - but adding notes to a property does not automatically create a saved listing. Likewise, removing this proeprty from saved listings does not auto remove the notes.</p>
                  </div>
                </div>
                <footer class="card-footer">
                  <a class="card-footer-item">Compare</a>
                  <a class="card-footer-item">Share</a>
                  <a class="card-footer-item">Delete</a>
                </footer>
              </div>
              <br/>
            </div>
            
          </div>
          
        </div>
      </div>
      
        )
    }
}

export default Profile
