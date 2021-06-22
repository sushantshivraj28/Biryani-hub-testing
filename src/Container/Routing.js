import { BrowserRouter, Route,Switch } from "react-router-dom";
import ContactUs from './ContactUs';
import Cuisine from './Cuisine';
import Login from "./Login";
import Cart from './Cart';
import Home from './Home';
import Navbar from "./Navbar";


const Routing = () => {
    return (<>
    <BrowserRouter>
    
    
    <div> <Navbar/></div>
    
    <div className="rout">
    <Switch>
    <Route path='/' exact component={Home}></Route>
     <Route path='/contact'  component={ContactUs}></Route>
     <Route path='/cuisine' component={Cuisine}></Route>
     <Route path='/cart'  component={Cart}></Route>
     <Route path='/login' component={Login}></Route>
     </Switch></div>
     
    </BrowserRouter>

    </> );
}
 
export default Routing;