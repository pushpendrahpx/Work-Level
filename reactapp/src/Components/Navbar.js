import React from 'react'
export default function Navbar(){
    return <nav class="navbar is-link">
    <div class="navbar-brand">
      <a class="navbar-item" style={{
          fontSize:'30px',
          fontWeight:200
      }}>
          WorkLevel
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  
    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="https://bulma.io/">
          Home
        </a>
        <a class="navbar-item" href="https://bulma.io/">
          Register your Company
        </a>
        <a class="navbar-item" href="https://bulma.io/">
          User Registration
        </a>
        
      </div>
  
      <div class="navbar-end">
        <a class="navbar-item" href="https://bulma.io/">
            Home
            </a>
            <a class="navbar-item" href="https://bulma.io/">
            Register your Company
            </a>
            <a class="navbar-item" href="https://bulma.io/">
            User Registration
            </a>
            
      </div>
    </div>
  </nav>;

}