import React from 'react';
import { Add, ArrowDownwardRounded, ArrowLeftRounded, ArrowRightRounded, Circle, DownloadOutlined, NearMe, Reply, SendOutlined, SendRounded, ShareOutlined, Star, StarBorderOutlined } from '@mui/icons-material';
import './features.scss';
import { featureMovies } from '../../data/movieFeatureData';
import { motion } from "framer-motion";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesByGenre } from '../../store';
import { useDispatch } from 'react-redux';

const Features = ({genres, type}) => {

  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreChange = (event) => {
    const selectedGenreId = event.target.value;
    setSelectedGenre(selectedGenreId);
    dispatch(fetchMoviesByGenre({ genre: selectedGenreId, type }));
  };

  const transition = {type:"linear", duration:"1"}
  const [selected, setSelected] = useState(0);
  const tLength = featureMovies.length;

  return (
    
    <div className='featues'>

      {type && genres && genres.length > 0 && ( // Check if genres are available
        <div className="category">
          <span className='category_type'>{type === "movies" ? "Movies" : "Series"}</span> 
          <select name="genre" id="genre" value={selectedGenre} onChange={handleGenreChange}>
            <option value="">Genres</option>
            {genres.map(genre => (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            ))}
          </select>
        </div>
      )}

      <motion.div 
          className="img_bg"
          key={selected}
          initial="hidden"
          whileInView="show"
          transition={transition}
      >
        <img 
        src={featureMovies[selected].movieImg}
        alt="movie-view"/>
        <div className="overlay"/>
        <div className="left_wrapper">
          <h1>{featureMovies[selected].name}</h1>
          <div className="rate">
            <Star className='star'/>
            <Star className='star'/>
            <Star className='star'/>
            <Star className='star'/>
            <StarBorderOutlined className='star'/>
            <span className='limit'>| {featureMovies[selected].rate}</span>
          </div>
          <span className='desc'>
          {featureMovies[selected].desc}
          </span>
          <div className="button_wraper">
                <Link to="/watch"> 
                <button className='custom_button'>Watch Now</button>
                </Link>
                <button className='normal_button'><NearMe className='btn'/></button>
                <button className='normal_button'><ArrowDownwardRounded className='btn'/></button>
                <button className='normal_button'><Add className='btn'/></button>
          </div>
        </div>

        <div className="right_wrapper">
          
      <ArrowLeftRounded 
            className='arrow'
            onClick={() => {
              selected === 0
              ? setSelected( tLength -1)
              : setSelected ((prev)=> prev -1)
          }}
            />
      <img src={featureMovies[selected].coverImg} alt="movie" />
      <ArrowRightRounded 
            className='arrow'
            onClick={() => {
              selected === tLength -1 
              ? setSelected (0)
              : setSelected ((prev)=> prev +1)
          }}
            />
      </div>
      </motion.div>
       
    </div>
  )
}

export default Features