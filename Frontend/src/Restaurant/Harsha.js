import React from 'react'
import { NavLink } from 'react-router-dom'
import restauranticon from './Icons/RestaurantIcon.png'
const Harsha = () => {
  return (
   <header className=' container-fuild px-5'> 
     <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
     >
        <div className="container">
            <img style={{width:'10%',height:'10vph'}} src= {restauranticon}/>
            <NavLink className="navbar-brand" to="/">Harsha <span className='text-danger'>Restaurant</span></NavLink>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/" aria-current="page"
                            >Home
                            <span className="visually-hidden">(current)</span></NavLink
                        >
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Aboutus">Aboutus</NavLink>
                    </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/Menu">Menu</NavLink>
                    </li>
                       <li className="nav-item">
                        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                    </li>
                       <li className="nav-item">
                        <NavLink className="nav-link" to="/User">User</NavLink>
                    </li>
        
                </ul>
               
            </div>
        </div>
     </nav>
     
    </header>
  )
}

export default Harsha


