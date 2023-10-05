import React, {useState} from 'react';
import Card from '../../../components/shared/UI/Card';
import styles from './ShopItem.module.css';

const ShopItem = ({TravelData}) => {
  //state variable to store CartItem
const [cart, setCart] = useState([]);

//function to add to item to cart
const addToCart = (product)=>{
if(product){
  const newItem = {
    name: product.name,
    image: product.image,
    price: product.price,
  };

  //update the cart state with a new item
  setCart([...cart, newItem]);
}
}

//condition to check if products item exist or not
  if(TravelData.length ===0){
    return( <div className='center'>
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
        <div className={styles.name_job}>{product.name}</div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <p>Tripwhoop: Extra 5% off with bonus points $10</p>
        <p>Amazon: $12</p>
        <p>Ebay: $15</p>
        
        <div className={styles.btns}>
          <button onClick={()=> addToCart(product)}>Add To Cart</button>
        </div>
      </div>
      ))}
    </div>
    
  
}

export default ShopItem
