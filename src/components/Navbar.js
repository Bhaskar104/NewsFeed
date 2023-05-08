import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Navbar = ()=>{

return (
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg  bg-dark">
  <Link className="navbar-brand text-success" to="/">NewsFeed</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav d-flex">
      <li className="nav-item mx-1"><Link className="text-light"  to="/business">Business</Link></li>
      <li className="nav-item mx-1"><Link className="text-light"  to="/entertainment">Entertainment</Link></li>
      <li className="nav-item mx-1"><Link className="text-light"  to="/general">General</Link></li>
      <li className="nav-item mx-1"><Link className="text-light"  to="/health">Health</Link></li>
      <li className="nav-item mx-1"><Link className="text-light"  to="/science">Science</Link></li>
      <li className="nav-item mx-1"><Link className="text-light"  to="/sports">Sports</Link></li>
      <li className="nav-item mx-1"><Link className="text-light"  to="/technology">Technology</Link></li>
    </ul>
  </div>
</nav>
<Outlet/>
      </div>
    )
  }
  
export default Navbar
