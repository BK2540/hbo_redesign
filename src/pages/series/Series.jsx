import './series.scss';

import Features from '../../components/features/Features';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Trending from '../../components/trending/Trending';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies, getGenres } from '../../store';
import SliderContainer from '../../components/sliderContainer/SliderContainer';

const Series = ({type}) => {

  const dispatch = useDispatch()
  const movies = useSelector((state) => state.hbo.movies)
  const genresLoaded = useSelector((state) => state.hbo.genresLoaded)
  const genres = useSelector((state) => state.hbo.genres);

  useEffect(()=> {
    dispatch(getGenres())
  },[]);

  useEffect(()=> {
    if(genresLoaded){
      dispatch(fetchMovies({genres, type: "tv"}))
    }
  }, [genresLoaded]);

  // console.log(movies)

  return (
    <div className='series'>
        <Navbar/>
        {genresLoaded && <Features genres={genres} type={type} />}
        <Trending/>
        <SliderContainer movies={movies}/>
        <Footer/>
    </div>
  )
}

export default Series