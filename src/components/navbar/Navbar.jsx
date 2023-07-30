import './navbar.scss';
import logo from '../../assets/logo.svg';
import home from '../../assets/home.png';
import { Add, Search, SearchRounded } from '@mui/icons-material';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from '../../utils/firebase-config';


const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false); //function to check on scroll or not
  const navigate = useNavigate();


  window.onscroll = () => {
      setIsScroll(window.pageYOffset === 0 ? false : true); //if on scroll set isScroll to true
      return () => (window.onscroll = null);
  };

  const handleSignOut = () => {
    signOut(firebaseAuth);
    navigate('/signin');

  }


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

                    <div className="options">
                        <span>Setting</span>
                        <span onClick={handleSignOut}>Log Out</span>
                    </div>
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