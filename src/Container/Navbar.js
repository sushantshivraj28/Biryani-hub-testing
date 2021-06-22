
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../MainComp';


const Navbar = () => {
    const {cart}= useContext(CartContext);
    return (<>
  
    <nav className="main">
    <div className="logo"><img src={'image/logo4.png'} height="60px" width="55px"> 
        </img></div>
        <h2 className="brandname">Biryani Hub</h2>
      <ul class="mainnav">    
          <li><Link className="menulink" to="/">Home</Link></li>
          <li><Link className="menulink" to="/Cuisine">Cuisine</Link></li>
          <li><Link className="menulink" to="/Contact">Contact</Link></li>
      </ul>
      <ul className="searchbar">
          <li>
          <input type="search" placeholder="  search cuisine or a dish...." ></input>
           <button><SearchIcon/></button>
          </li>
      </ul>
      <ul className="icon3">
          <li>LogIn<Link to="/login"><AccountCircleSharpIcon style={{fontSize:50,color:'brown'}}/></Link></li>
          <li><Link to="/cart">
           <div>
           <span className="cartnum">{cart.totalitems}</span>
           <ShoppingBasketIcon style={{fontSize:50,color:'brown'}}/>
           </div>
          
          </Link></li>
      </ul>
    </nav>
   
   
  </> 
      )
}
 
export default Navbar;