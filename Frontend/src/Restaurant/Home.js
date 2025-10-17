import React from 'react'
import { useNavigate } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HarshaImg from "./assets/HarshaImg.jpg"
import Chicken from "./assets/Chicken.jpg"
import Veg from "./assets/Veg.jpg"
import VegPizza from "./assets/VegPizza.jpg"
import ChickenPizza from "./assets/ChickenPizza.jpg"
import ChickenBurger from "./assets/ChickenBurger.jpg"
import VegBurger from "./assets/VegBurger.jpg"
import pizza from "./assets/pizza.jpg"
import burger from "./assets/burger.jpg"
import biryani from "./assets/biryani.jpg"
const Home = () => {

   const navigate = useNavigate();

  const handleGoToMenu = () => {
    navigate('/Menu'); 
  };

  const handleClick = (datas) => {
    navigate(`/Menu/${datas.id}`); 
  };
    
  
  const Harsha =[
      {
        id:1,
        image:biryani,
        itemName:'CHICKEN BIRYANI'
      },
       {
         id:2,
        image:pizza,
        itemName:'VEG PIZZA'
      },
       {
         id:3,
        image:burger,
        itemName:'NON VEG BURGER'
      },
      {
         id:4,
        image:biryani,
        itemName:'VEG BIRYANI'
      },
       {
        id:5,
        image:pizza,
        itemName:'NON VEG PIZZA'
      },
       {
        id:6,
        image:burger,
        itemName:'VEG BURGER'
       }
  ]
    const data =[
      {
      image:Chicken,
      itemName: 'Chicken',
      price: '240',
      description: 'A rich and aromatic rice dish made with basmati rice, marinated chicken, fragrant spices (like cloves, cardamom, and bay leaves), saffron, and herbs. It slow-cooked to perfection, often served with raita or boiled egg.'
      },
      {
      image:Veg,
      itemName: 'VEG',
      price: '180',
      description: 'A vegetarian version of biryani, made with assorted vegetables like carrots, beans, peas, and potatoes. Cooked with basmati rice and traditional biryani spices. It’s just as flavorful, often layered with fried onions and saffron.'
      },
      {
      image:VegPizza,
      itemName: 'Veg Pizza',
      price: '80',
      description: 'A cheesy delight topped with a variety of vegetables such as bell peppers, onions, mushrooms, olives, and tomatoes. Comes on a crispy or soft crust, often seasoned with Italian herbs like oregano and basil.'
      },
      {
      image:ChickenPizza,
      itemName: 'Chicken Pizza',
      price: '120',
      description: 'A non-veg pizza topped with cooked or grilled chicken (often spiced or barbecued), cheese, and other toppings like onions, peppers, or jalapeños. A hearty and protein-rich pizza.'
      },
       {
      image:ChickenBurger,
      itemName: 'Chicken Burger',
      price: '140',
      description: 'A sandwich featuring a seasoned chicken patty (grilled or fried), placed inside a burger bun along with fresh veggies and sauces. It’s juicy, savory, and filling.'
       },
       {
      image:VegBurger,
      iteName: 'Veg Burger',
      price: '90',
      description: 'A patty made of mashed vegetables (like potatoes, peas, carrots) or paneer, served in a bun with lettuce, tomato, onion, and sauces like mayo or ketchup. A crispy and satisfying vegetarian option.'
      }
    ]
    
       
    
  return (
  <div className="hero-content">
   
    <div className='Harsha'>
          <h1 className='bg bg-success'>Welcome to MyRestaurant</h1>    
        <div>
        <img src={HarshaImg} style={{ width: '100%', borderRadius: '10px' }} alt="" />
         </div>
        </div>
         <section>
      <div className='row'>
        <h1>Choose <span className='text-danger'>us</span></h1>
          {Harsha.map((datas) => (
             <div key={datas.id} className='col-md-2' >
          <div className='card p-3' borderRadius="500px">
          <img  onClick={() => handleClick(datas)}style={{width: '150px',height: '150px',borderRadius: '50%',objectFit: 'cover',}}src={datas.image} alt=""/>
          <h6>{datas.itemName}</h6>
          </div>
          </div>
          )

          )}
      </div>
    </section>
        <section>
          <div className=" text-center">
          <h1 onClick={handleGoToMenu} className="btn btn-primary">MENU</h1>
          </div>
          <div className='row'>
           {data.map((fig, index) => (
        <div key={index} className='col-md-4'>
          <div className='card p-3 h-100'>
            <img style={{width: '150px',height: '150px',borderRadius: '50%'}}src={fig.image} alt=""/>
          <div className="name">{fig.itemName}</div>
          <h4><CurrencyRupeeIcon />{fig.price}</h4>
          <p>{fig.description}</p>          
          <div>
          </div>
          </div>
          
        </div>
       
      ))}
      
      </div>
          

        </section>
         
      </div>
  )
}

export default Home
