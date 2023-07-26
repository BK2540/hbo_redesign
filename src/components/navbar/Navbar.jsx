import './navbar.scss';
import logo from '../../assets/logo.svg';
import home from '../../assets/home.png';
import { Add, Search, SearchRounded } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false); //function to check on scroll or not

  window.onscroll = () => {
      setIsScroll(window.pageYOffset === 0 ? false : true); //if on scroll set isScroll to true
      return () => (window.onscroll = null);
  };

  return (
    <div className={isScroll ? 'navbar scroll' : 'navbar'}>
      <div className="container">

        <div className="left">
        <Link to='/' className='link'>
            <img src={logo} alt="logo" className='nav_logo'/>
        </Link>
        </div>
        
        <div className="right">
          <div className="nav_menu">
            <Link to='/series' className='link'>Series</Link>
            <Link to='/movies' className='link'>Movies</Link>
            <Link to='/mylist' className='link'>My list</Link>
          </div>
            <div className="nav_search">
              <Link to='/search'>
              <Search className='search_icon'/>
              </Link>
                
            </div>

            <div className="nav_user">
            <Link to='/signin' className='link'>
              <img src="https://pbs.twimg.com/media/Ef52TYwWkAAqBl3.jpg" 
              alt="userImg" />
            </Link>
            </div>

        </div>

        <div className="mobile_tab">
                <Link to='/' className='link'>
                  <img src={home} alt="home" className='icon'/>
                  Home
                </Link>
                <Link to='/search' className='link'>
                  <SearchRounded className='icon'/>
                  Search
                </Link>
                <Link to='/mylist' className='link'>
                  <Add className='icon'/>
                  Download
                </Link>
                <Link to='/signin' className='link'>
                <img src="https://pbs.twimg.com/media/Ef52TYwWkAAqBl3.jpg" alt="userImg" className='icon'/>
                  Profile
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar