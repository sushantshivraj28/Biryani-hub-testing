import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useContext, useEffect, useState } from 'react';
import Kartitem from './Kartitem';
import {CartContext} from "../MainComp";
import { ItemsArray } from '../CuisineBox/ItemsArray';
const jsonitems= JSON.stringify(ItemsArray);


const Contextcart = () => {
    const [product, setProducts]=useState([]);
    const {cart} =useContext(CartContext);
    
    useEffect(()=>{
      if(!cart.items){
        return;
      }
      fetch('https://mocki.io/v1/aa233ef6-5174-4105-ac5e-77610181cd07',
      {
      method:'POST',
      headers:{
        'Content-type':'aplication/json',
        'Accept' : 'application/json'
      },
      body:JSON.stringify({ids:Object.keys(cart.items)})
    }).then(res=>res.json()).then(products=>{
      setProducts(products);
      console.log(products);
    })
      
      
    },[cart]
    );
    

   
    return (<>

<div className="cartdiv">
<h2><ShoppingCartIcon  style={{ fontSize: 50}}/>Shoping Cart</h2>
<hr style={{color:'white'}}></hr>
 <div className="cartcontainer">
 
 <Kartitem></Kartitem>

 </div>
 <hr style={{color:'white'}}></hr>
 <div className="carttotal">
   <h5>Cart Total:</h5>
   <h5>650/-</h5>
   <button>Proceed</button>
 </div>
 
    
</div>

    </>  );
}
 
export default Contextcart;