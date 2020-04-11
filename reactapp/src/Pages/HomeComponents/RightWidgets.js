import React, { Component } from 'react'

class RightWidgets extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <article class="panel is-primary">
                                <p class="panel-heading">
                                    Search Widget
                                </p>
                                <p class="panel-tabs">
                                    <a class="is-active">All</a>
                                    <a>Companies</a>
                                    <a>Employee</a>
                                    <a>Colleague</a>
                                </p>
                                <div class="panel-block">
                                    <p class="control has-icons-left">
                                    <input class="input is-primary" type="text" placeholder="Search" />
                                    <span class="icon is-left">
                                        <i class="fas fa-search" aria-hidden="true"></i>
                                    </span>
                                    </p>
                                </div>
                                <a class="panel-block is-active">
                                    <span class="panel-icon">
                                    <i class="fas fa-book" aria-hidden="true"></i>
                                    </span>
                                    bulma
                                </a>
                                <a class="panel-block">
                                    <span class="panel-icon">
                                    <i class="fas fa-book" aria-hidden="true"></i>
                                    </span>
                                    marksheet
                                </a>
                                <a class="panel-block">
                                    <span class="panel-icon">
                                    <i class="fas fa-book" aria-hidden="true"></i>
                                    </span>
                                    minireset.css
                                </a>
                                <a class="panel-block">
                                    <span class="panel-icon">
                                    <i class="fas fa-book" aria-hidden="true"></i>
                                    </span>
                                    jgthms.github.io
                                </a>
                                </article>
        )
    }
}

export default RightWidgets
