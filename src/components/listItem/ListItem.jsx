import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';

import './listItem.scss'
import Details from '../details/Details';
import { firebaseAuth } from '../../utils/firebase-config';


export default React.memo (function ListItem ({movieData}) {

 const navigate = useNavigate();

 const handleClick = () => {
  navigate("/details");
}

onAuthStateChanged(firebaseAuth, (currentUser) => {
  if (!currentUser) navigate('/signin');
});


  return (
    <div className='listItem'>
        
        <div className="item" variant="primary" onClick={handleClick}> 
          <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} 
          alt="image"
          className='item_img' />

          <div className="title">
            <span>{movieData.name}</span>
          </div>          
        </div>   
    </div>
  )
});
