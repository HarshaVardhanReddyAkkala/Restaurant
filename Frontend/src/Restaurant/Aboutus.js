import React from 'react'
import Restimg from "./assets/Restimg.jpg"
import { useNavigate } from 'react-router-dom';
import FoodType from './FoodType';
const Aboutus = () => {
    
   const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate('/'); 
  };
  
  return (
    <div>
      <div><FoodType/></div>
     <p> Welcome to [Restaurant Name], where great food meets warm hospitality. Nestled in the heart of [City/Neighborhood], we bring people together over delicious meals made with fresh, locally-sourced ingredients and a whole lot of love.
      Founded in [Year] by [Founder’s Name, if applicable], our mission has always been simple: serve flavorful dishes that feel like home, in a space that feels like family. Whether you're joining us for a quick lunch, a family dinner, or a special celebration, we’re here to make every moment memorable.
      From our signature [mention popular dishes or cuisine, e.g., wood-fired pizzas and handmade pastas] to our carefully curated wine list and cozy atmosphere, we’re passionate about creating a dining experience that keeps you coming back.
      Thank you for being part of our journey. We can’t wait to welcome you to the table.</p>
       <div>
                <h1 style={{backgroundImage: `url(${Restimg})` ,height:'50vh',backgroundPosition:'center', textAlign:"center",color:'red'}}>HARSHA RESTAURANT</h1>
       </div>
       <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="btn btn-primary"onClick={handleGoToHome}>About Restaurant</button>
       </div>     
    </div>
  )
}

export default Aboutus
