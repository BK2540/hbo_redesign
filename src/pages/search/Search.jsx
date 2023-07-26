import './search.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { KeyboardVoiceRounded, SearchRounded,  } from '@mui/icons-material';
import random from '../../assets/dice.png';
import { motion, useSpring } from "framer-motion";
import { useEffect } from 'react';

const Search = () => {

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 400
  }

  return (
    <>
    <Navbar/>
    <div className='search'> 
        <div className="seach_input">
            <input type="text" placeholder='Type Name, Genres,  Cast or Director...' />
            <div className="search_icon">
                <KeyboardVoiceRounded/>
                <SearchRounded/>
            </div>
        </div>
        <motion.div 
        transition={spring} 
        animate={{ scale: 1.2 }}
        whileHover={{scale: 1.1}}
        className="random">
            <img 
            src={random} 
            alt="random"/>

            <span>Random by mood</span>
        </motion.div>
    </div>
    <Footer/>
    </>
  )
}

export default Search