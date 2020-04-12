import React, { Component } from 'react'

class SearchInProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
                <div class="box" style={{borderRadius: "0px"}}>
         
         <div class="columns">
           <div class="column is-2-tablet user-property-count has-text-centered">
             <p class="subtitle is-5">
               <strong></strong>
               123
               <br/>
               properties
             </p>
           </div>
           <div class="column is-8">
             <p class="control has-addons">
               <input class="input" placeholder="Search your liked properties" style={{width: '100% !important'}} type="text" />
               <button class="button">
                 Search
               </button>
             </p>
           </div>
         </div>
       </div>
        )
    }
}

export default SearchInProfile
