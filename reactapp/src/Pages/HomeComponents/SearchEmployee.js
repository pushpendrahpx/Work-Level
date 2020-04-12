import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function EachBox(props){
    
        return   <article class="media" style={{width:'100%'}}>
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="https://static.wixstatic.com/media/27f7a3_4944f48a919d4e028e9d8153fe314c68~mv2.jpg/v1/fill/w_140,h_140,al_c,q_80,usm_0.66_1.00_0.01/73281629_727938637673237_203890694347659.webp" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
            <strong><Link to={'/employee/'+props.employee.email}>{props.employee.name}</Link></strong> <small>{props.employee.email}</small> <small>31m</small>
              <br />
              <form>
                  <input type='hidden' name='email' value={props.employee.email} />
                  <button className='button is-primary'>Select Employee</button>
              </form>
            </p>
          </div>
        </div>
      </article>
}
class SearchEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 employees:[],
                 isLoading:false
        }
    }
    makeAPIrequest = async (url,data = {})=>{
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
    searchCurrent = async (e)=>{
        let query = e.target.value;
        if(query.length > 0){
            this.setState({isLoading:true});

        let url = 'http://localhost:5000/api/Employee/search/'+query;

        this.setState({employees:await this.makeAPIrequest(url)});
            this.setState({isLoading:false})
        }

    }
    renderProducts = ()=>{
        return this.state.employees.map(employee=>{
            console.log(employee)
            return <a class="is-active" key={employee.email}>
            {/* <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span> */}
            <div class="box" style={{width:'100%'}}>
                <EachBox employee={employee} />
            </div>
        </a>
        })
    }
    render() {

        let progress = this.state.isLoading === true ? <progress class="progress is-small is-info" max="100">15%</progress>:'';

        return (
            <article class="panel is-info" style={{width:'100%'}}>
            <p class="panel-heading">
                Search Employee
            </p>
            {progress}
            {/* <p class="panel-tabs">
                <a class="is-active">All</a>
                <a>Public</a>
                <a>Private</a>
                <a>Sources</a>
                <a>Forks</a>
            </p> */}
            <div class="panel-block">
                <p class="control has-icons-left">
                <input class="input is-info" type="text" placeholder="Search Employees" name='searchEmployee' id='searchEmployee' onChange={this.searchCurrent} />
                <span class="icon is-left">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </span>
                </p>
            </div>
            {
                this.renderProducts()

            }
            </article>
        )
    }
}

export default SearchEmployee
