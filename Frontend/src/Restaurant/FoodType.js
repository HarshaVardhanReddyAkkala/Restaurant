import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FoodType = () => {


    const navigate = useNavigate();
    const handleGoToMenu = (datas) => {
    navigate(`/Menu/${datas.id}`); 
  };
  
  return (
    <div>
      <div className="container">
<div className="row justify-content-center">
<div className="col-md-6">
<form>
<div className="input-group mb-3">
<select className='form-select mt-2' style={{'maxWidth': '150px'}}>
<option value="Biryani">select</option>
<option value="Biryani">id:1</option>
<option value="Burger">Burger</option>
<option value="Cakes">Cakes</option>
<option value="Ice Creams">Ice Creams</option>
<option value="Pizza">Pizza</option>
<option value="Rolls">Rolls</option>
<option value="Salad">Salad</option>
</select>
<input type="text" className='form-control mt-2' placeholder='Search la food...'/>
<button className='bim btn-primary mt-2' type='submit' onClick={handleGoToMenu}>Search
 </button>
</div>
</form>
</div>
</div>
</div>
    </div>
  )
}

export default FoodType
