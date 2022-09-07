import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider";


function Header() {
      const [{basket,user}, dispatch] = useStateValue();
    
      const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

  return (
    <nav className='header'>
        <Link to='/' className='nav-link'> 
          <img  className= "header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='logo'/>
        </Link>

       <div className='header__search'>
        <input type='text' className="header__searchInput"/>
        <SearchIcon className='header__searchIcon'/>
       </div>

       <div className='header__nav'>

          <Link to={!user && '/login'} className='header__link'>
          <div onClick={handleAuthenticaton}    className='header__option'>
            <span className='header__optionOne'> Hello {user}</span>
            <span className='header__optionTwo'>{user ?'Sign out' : 'Sign in'}</span>
          </div>
          </Link>
    
          <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionOne'>Returns</span>
            <span className='header__optionTwo'>& Orders</span>
          </div>
          </Link>

          <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionOne'>Your</span>
            <span className='header__optionTwo'>Prime</span>
          </div>
          </Link>

          <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingBasket/>
            <span className='header__optionTwo header__basketCount'>{basket?.length}</span>
          </div>
          </Link>

       </div>
    </nav>
  );
}

export default Header