import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Home'
import Register from './CurdOperations/Register'
import User from './User'
import Aboutus from './Aboutus'
import Contact from './Contact'
import Login from './CurdOperations/Login'
import Menu from './Menu'
import FoodType from './FoodType'
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home}/>
         <Route path='Contact' Component={Contact}/>
          <Route path='Register' Component={Register}/>
          <Route path='User' Component={User}/>
           <Route path='Login' Component={Login}/>
            <Route path='Menu' Component={Menu} />
             <Route path='Menu/:id' Component={Menu} />
             <Route path='Aboutus' Component={Aboutus} />
             <Route path='Foodtype' Component={FoodType} />

      </Routes>
    </div>
  )
}

export default Routing
