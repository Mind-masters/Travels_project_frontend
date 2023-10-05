import React, {useState} from 'react'
import Card from '../../components/shared/UI/Card';
import ShopItem from './ShopItem/ShopItem';
import ShoppingCart from './ShoppingCart/ShoppingCart';


const Shop = () => {
  const [cart, setCart] = useState([]); // State to store cart items

  const TravelData = [
    {
      "id": 1,
      name: "Bagpack",
      "destination": "Paris, France",
      "description": "Explore the romantic streets of Paris.",
      "image": "https://rb.gy/udp2k",
      "price": 40
  },
  {
      "id": 2,
      "name": "Travel Shoulder Purse Bag",
      "destination": "Tokyo, Japan",
      "description": "Experience the vibrant culture of Tokyo.",
      "image": "https://rb.gy/qmhk2",
      "price": 10
  },
  {
      "id": 3,
      "name": "Cross Body Bag",
      "destination": "Tokyo, Japan",
      "description": "Experience the vibrant culture of Tokyo.",
      "image": "https://rb.gy/z5ua9",
      "price": 10
  },
  {
      "id": 4,
      "name": "Water Bottle",
      "destination": "Tokyo, Japan",
      "description": "Experience the vibrant culture of Tokyo.",
      "image": "https://rb.gy/w2nxa",
      "price": 5
  },
  {
      "id": 5,
      "name": "Travel Wallet",
      "destination": "Tokyo, Japan",
      "description": "Experience the vibrant culture of Tokyo.",
      "image": "https://rb.gy/3y654",
      "price": 8
  },
  {
      "id": 6,
      "name": "Travel Boot",
      "destination": "Tokyo, Japan",
      "description": "Experience the vibrant culture of Tokyo.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDeEB2M8nTPr0_dr-TOtxBEiSwkZHMjESqQ&usqp=CAU",
      "price": 10
  },
  
  // Add more travel destinations here
];
 
  return (
    <div>
      <h1>Hello Shop</h1>
      <h1>Hello Shop</h1>
      <h1>Hello Shop</h1>
      
      <Card>
      <ShopItem TravelData={TravelData}/>
      <ShoppingCart cart={cart} />
      </Card>
    </div>
  )
}

export default Shop
