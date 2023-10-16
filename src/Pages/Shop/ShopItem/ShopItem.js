import React, {useState, useContext} from 'react';
import Card from '../../../components/shared/UI/Card';
import styles from './ShopItem.module.css';
import { ShopContext } from '../../../contextAPI/shopContext/ShopContextProvider';


const ShopItem = ({TravelData}) => {

const {addToCart} = useContext(ShopContext);
//condition to check if products item exist or not
  if(TravelData.length ===0){
    return( <div className={styles.center}>
      <Card>
      <h2>No Product found</h2>
      </Card>
    </div> 
    ); 
  }
// iterating over products
  return <div className={styles.container}>
      {TravelData.map((product)=>(
      <div className={styles.box} key={product.id}>
      <div className={styles.image}>
        <img src={product.image} alt={product.name}/>
        </div>
        <div className={styles.name}>{product.name}</div>
        <p> {product.description}.</p>
        <p>Tripwhoop: Extra 5% off with bonus points $10</p>
        <p>Amazon: $12</p>
        <p>Ebay: $15</p>
        
        <div className={styles.btns}>
          <button onClick={()=> addToCart(product.id)} >
            Add To Cart
            </button>
        </div>
      </div>
      ))}
    </div>
    
  
}

export default ShopItem
