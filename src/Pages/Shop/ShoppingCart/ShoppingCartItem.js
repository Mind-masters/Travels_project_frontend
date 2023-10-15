import React, {useContext} from 'react'
import './ShoppingCartItem.css'
import Card from '../../../components/shared/UI/Card'
import { ShopContext } from '../../../contextAPI/shopContext/ShopContextProvider';

const ShoppingCartItem = (props) => {
    const {id, image, name, price} = props.data
    const {cartItems, removeFromCart, addToCart, updateCartAmount} = useContext(ShopContext);
    
  return (
    <div className='cartItem'>
        <img src={image}/>
        <div className='description'>
           <p>{name}</p>
           <p>${price}</p>
           <div className='countHandler'>
            <button className='btn' onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e)=> updateCartAmount(Number(e.target.value), id)}/>
            <button className='btn'onClick={()=>addToCart(id)}>+</button>
           </div>
        </div>
    </div>
  )
}

export default ShoppingCartItem