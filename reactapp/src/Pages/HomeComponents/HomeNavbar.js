import React from 'react'
let logout = ()=>{
  localStorage.removeItem("CompanyDetails");
  localStorage.setItem("isLoggedIn","false")
  window.location.href= '/';
}
export default function HomeNavbar(){


    
    return <nav class="navbar is-dark">
    <div class="navbar-brand">
      <a class="navbar-item" style={{
          fontSize:'30px',
          fontWeight:200
      }}>
          WorkLevel - Dashboard
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
      
    <div id="navbarExampleTransparentExample" class="navbar-menu">

        <div class="field"  style={{width:'50%'}}>
            <div class="control navbar-item">
                <input class="input" type="text" placeholder="Search Anything" />
                <button className='button is-primary'>Search</button>
            </div>
        </div>
  
      <div class="navbar-end">
          <a className='navbar-item'>Home</a>
          <a className='navbar-item'>Employees</a>
          <a className='navbar-item'>Settings</a>
          <a className='navbar-item'>
            <button className='button is-danger' onClick={logout}>Logout</button>
          </a>
      </div>
    </div>
  </nav>;

}