import React  from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [state, dispatch] = useStateValue();

    return (
        <nav className="header">
        <Link to="/">
        <img src="https://i.pinimg.com/474x/85/d5/24/85d52401aace9c3e76fa73ab01c60d13.jpg" alt="amazon"/>
        </Link>
        
         {/* search bar */}
        <div className="header__search">
            <input className="header__searchInput"/>
            <div className="header__icon">
            <SearchIcon fontSize="large"/>
            </div>
        </div>
        {/* additinal content */}
    <div className='header__sideBar'>

        <div className="header__sideBarContent">
          <p>Hello, User</p>
          <p className="header__contentBottom">Accounts</p>
        </div>
        
        <div className="header__sideBarContent">
         <p>Returns</p>
         <p className="header__contentBottom">& Orders</p>
        </div>
        
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
        <div className="header__sideBarContentBasket">
        
           <span className="header__sideBarContentBasketLineOne">{state.basket.length}</span>
           <span className="header__sideBarContentBasketLineTwo"><ShoppingBasketIcon/></span>
        
        </div>
        </Link>
   </div>

        </nav>
    )
}

export default Header
