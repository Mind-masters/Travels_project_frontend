import React, {useState} from 'react'
import Card from '../../components/shared/UI/Card';
import ShopItem from './ShopItem/ShopItem';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import {TravelData} from '../Shop/Products'

const Shop = () => {
 // State to store cart items

//  console.log(TravelData)
 
  return (
    <div>
      <h1>Hello Shop</h1>
      <h1>Hello Shop</h1>
      <h1>Hello Shop</h1>
      
      <Card>
      <ShopItem TravelData={TravelData}/>
      {/* <ShoppingCart/> */}
      </Card>
    </div>
  )
}

export default Shop
