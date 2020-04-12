import React, { Component } from 'react'

class AssignWork extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Company:JSON.parse(localStorage.getItem("CompanyDetails"))
        }
    }
    async componentDidMount(){
        let response = await fetch('http://localhost:5000/api/company/getAllEmployees/5e92e40ac5e0af55a4f0e666',{method:"POST"});
        let data = await response.json();
        console.log(data)

    }
    render() {
        return (<article class="panel is-danger" style={{width:'100%'}}>
        <p class="panel-heading">
          Assign Work to Employees
        </p>
      
        <div class="panel-block">
          <p class="control has-icons-left">
          <div class="field">
                <div class="control">
                    <textarea class="textarea is-danger" placeholder="Describe Task to be assigned...."></textarea>
                </div>
            </div>
            
            <div class="field select is-rounded">
            <select>
                <option>Select Employee From Your Company ...</option>
                
            </select>
            </div>
          </p>
        </div>
      </article>
        )
    }
}

export default AssignWork
