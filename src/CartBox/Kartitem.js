import { useContext } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import { CartContext } from '../MainComp';

const Kartitem = () => {

  
  const {cart,setCart}= useContext(CartContext);
  console.log(" new data",cart); 
  console.log("jay shree ram")
  
    return ( <><div className="cartitem">
    <div className="prodimage">
      <img src={cart.img} height="120px" ></img>
    </div>
    <div className="prodtitle">
       <h5>{cart.title}</h5> 
    </div>
    <div className="incrementer">
     <RemoveIcon/>
     <input type="text" ></input>
     <AddIcon/>
    </div>
    <div className="prodprice">
      <h4> Rs:-{cart.price}/-</h4>
    </div>
    <div className="prodremove">
      <DeleteIcon/>
    </div>
 </div></> );
}
 
export default Kartitem;