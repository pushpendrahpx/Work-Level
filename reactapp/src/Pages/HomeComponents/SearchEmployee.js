import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './SearchEmployee.css';

function EachBox(props){
        return   <article class="media" style={{width:'100%'}}>
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="https://static.wixstatic.com/media/27f7a3_4944f48a919d4e028e9d8153fe314c68~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01/73281629_727938637673237_203890694347659.webp" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            
            <strong>
                <a href={`/employee/`+props.employee.email}>
                    {props.employee.name}
                </a>
            </strong> 
            <small style={{margin:'10px'}}>
                {props.employee.email}
            </small> 
            <small>
                31m
            </small>
              <br />
              <button className='button is-primary ' disabled > Employee Already Registered </button>
              <form onSubmit={props.select}>
                  <input type='hidden' name='empID' value={props.employee._id} />
                  <button className='button is-primary'>Select Employee</button>
              </form>
            
          </div>
        </div>
      </article>
}
class SearchEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 employees:[],
                 isLoading:false,
                 isEmployeeLoaded:false
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
            // console.log(employee)
            return <a class="is-active" key={employee.email}>
            {/* <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span> */}
            <div class="box EmployeeBox" style={{width:'100%'}}>
                
                <EachBox employee={employee} select={this.selectEmployee} />
            </div>
        </a>
        })
    }
    
    selectEmployee = async (event)=>{
        event.preventDefault();
        this.setState({isEmployeeLoaded:true})
        let {empID} = event.target;
        let CompanyID = JSON.parse(localStorage.getItem("CompanyDetails"));
        CompanyID = CompanyID._id;
        
        let url = 'http://localhost:5000/api/company/add/Employee/' + CompanyID;
        let response = await this.makeAPIrequest(url,{
            _id:empID.value
        });
        if(response.statusCode === 200){
            alert("Employee Added to Company")
            localStorage.setItem("CompanyDetails",JSON.stringify(response.Company))
        }else if(response.statusCode === 202){
            alert("Employee Already Registered")
        }else{
            alert("Failed to Add Employee")
        }

        this.setState({isEmployeeLoaded:false})
        
    }

    render() {

        let progress = this.state.isLoading === true ? <progress class="progress is-small is-info" max="100">15%</progress>:'';
        let EmployeeProgress = this.state.isEmployeeLoaded === true ?  <progress class="progress is-small is-info" max="100">15%</progress>:'';
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
            {EmployeeProgress}
            {
                this.renderProducts()

            }
            </article>
        )
    }
}

export default SearchEmployee
