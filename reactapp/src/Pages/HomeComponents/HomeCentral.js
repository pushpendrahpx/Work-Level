import React, { Component } from 'react'
import SearchEmployee from './SearchEmployee'
import AssignWork from '../Work/AssignWork'

class HomeCentral extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div class="tile is-ancestor" style={{margin:'10px',borderRadius:"5px",background:"white"}}>
  <div class="tile is-vertical is-8">
    <div class="tile is-parent">
            <SearchEmployee />
    </div>
    <div class="tile is-parent">
            <AssignWork />
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Tall tile</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
        </div>
      </div>
    </article>
  </div>
</div>
        )
    }
}

export default HomeCentral
