import React, { useState, } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios';
import Chicken from "./assets/Chicken.jpg"
import Veg from "./assets/Veg.jpg"
import VegPizza from "./assets/VegPizza.jpg"
import ChickenPizza from "./assets/ChickenPizza.jpg"
import ChickenBurger from "./assets/ChickenBurger.jpg"
import VegBurger from "./assets/VegBurger.jpg"
import { useParams } from 'react-router-dom';
const Menu = () => {
    const [Menu, setMenu]=useState([]);
         const { id } = useParams();

   const[itemName, setItemName]=useState("");
   const[description, setDescription]=useState("");
   const[price, setPrice]=useState("");
    
  const handleSubmit = (e) => {
    e.preventDefault();
  
  
   axios.post("http://localhost:7071/api/memu",{
       itemName,
       description,
       price,
   })
    .then(() => {
      alert("Menu item added successfully");
      return axios.get("http://localhost:7071/api/memu");
    })
    .then((res) => setMenu(res.data))
    .catch((err) => console.log(err));
}

    const data =[
      {
      id:1,
      image:Chicken,
      itemName: 'Chicken',
      price: '240',
      description: 'A rich and aromatic rice dish made with basmati rice, marinated chicken, fragrant spices (like cloves, cardamom, and bay leaves), saffron, and herbs. It slow-cooked to perfection, often served with raita or boiled egg.'
      },
      {
      id:2,
      image:Veg,
      itemName: 'VEG',
      price: '180',
      description: 'A vegetarian version of biryani, made with assorted vegetables like carrots, beans, peas, and potatoes. Cooked with basmati rice and traditional biryani spices. It’s just as flavorful, often layered with fried onions and saffron.'
      },
      {
      id:3,
      image:VegPizza,
      itemName: 'Veg Pizza',
      price: '80',
      description: 'A cheesy delight topped with a variety of vegetables such as bell peppers, onions, mushrooms, olives, and tomatoes. Comes on a crispy or soft crust, often seasoned with Italian herbs like oregano and basil.'
      },
      {
       id:4,  
      image:ChickenPizza,
      itemName: 'Chicken Pizza',
      price: '120',
      description: 'A non-veg pizza topped with cooked or grilled chicken (often spiced or barbecued), cheese, and other toppings like onions, peppers, or jalapeños. A hearty and protein-rich pizza.'
      },
       {
         id:5,
      image:ChickenBurger,
      itemName: 'Chicken Burger',
      price: '140',
      description: 'A sandwich featuring a seasoned chicken patty (grilled or fried), placed inside a burger bun along with fresh veggies and sauces. It’s juicy, savory, and filling.'
       },
       {
      id:6,
      image:VegBurger,
      itemName: 'Veg Burger',
      price: '90',
      description: 'A patty made of mashed vegetables (like potatoes, peas, carrots) or paneer, served in a bun with lettuce, tomato, onion, and sauces like mayo or ketchup. A crispy and satisfying vegetarian option.'
      }
] 
   const selectedItem = data.find((datas) => datas.id === Number(id));
 
  return (
    <div>
      <section>
      {selectedItem ? (
        <div>
          <img src={selectedItem.image} alt=""/>
          <h2>{selectedItem.itemName}</h2>
        <h4><CurrencyRupeeIcon />{selectedItem.price}</h4>
           <p>{selectedItem.description}</p>
        </div>
      ) : (
        <p>Item not found</p>
      )}
      </section>
         <h1 className="text-center">Menu Page</h1>
          <div className='row'>
           {data.map((datas) => (
        <div key={datas.id} className='col-md-4'>
          <div className='card p-3 h-100'>
            <img style={{width: '150px',height: '150px',borderRadius: '50%'}} src={datas.image} alt=""/>
          <div className="name">{datas.itemName}</div>
          <h4><CurrencyRupeeIcon />{datas.price}</h4>
          <p>{datas.description}</p>
          <div>
          </div>
          </div>
        </div> 
      ))}
      </div>

      <section className='container p-5 text-center'>     
      <form onSubmit={handleSubmit}>  
 <div className="form-floating mb-3 text-center">
  <input
    type="text"
    placeholder="Item Name"
    value={itemName}
    onChange={(e) => setItemName(e.target.value)}
  />
  </div>
   <div className="form-floating mb-3 text-center">
  <input
    type="text"
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />
  </div>
   <div className="form-floating mb-3 text-center">
  <input
    type="number"
    placeholder="Price"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
  />
  </div>
  <div style={{justifyContent: 'center'}}>
  <button type="submit" className="btn btn-success me-3 ">Submit</button>
  </div>
</form>
      </section>
      <h1 className="text-center">Menu Page</h1>
       <div className='row'>
           {Menu.map((fig, index) => (
        <div key={index} className='col-md-4'>
          <div className='card p-3 h-100'>
          <div className="name">{fig.itemName}</div>
          <h4><CurrencyRupeeIcon />{fig.price}</h4>
          <p>{fig.description}</p>
          <div>
          </div>
          </div>
        </div> 
      ))}
      </div>
    </div>
  )
}

export default Menu
