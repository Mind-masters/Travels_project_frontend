import React from 'react'
import Card from '../../../components/shared/UI/Card'

const ShoppingCart = ({ cart }) => {
  console.log(cart)
  return (
    <Card >
      <h1>Hello Cart</h1>
      <div>
        <img src='' alt=''/>
      </div>
      <p>Name</p>
      <p>Price</p>
    </Card>
  )
}

export default ShoppingCart
