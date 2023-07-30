import Lists from '../lists/Lists'
import './sliderContainer.scss'

const SliderContainer = ({movies}) => {
    const getMoviesBetween = (start, end) => {
        return movies ? movies.slice(start, end) : [];
    }
  return (
    <div className='SliderContainer'>
        <Lists data={getMoviesBetween(0,8)} title="Only on HBO"/>
        <Lists data={getMoviesBetween(8,16)} title="Available in Thai subtitle"/>
        <Lists data={getMoviesBetween(16,24)} title="Trending in Asia"/>
        <Lists data={getMoviesBetween(24,32)} title="Recommend for You"/>
        <Lists data={getMoviesBetween(32,40)} title="New on HBO"/>
        <Lists data={getMoviesBetween(40,48)} title="Good old day"/>
        <Lists data={getMoviesBetween(48,56)} title="Watch Together"/>
        <Lists data={getMoviesBetween(56,64)} title="Leaving Soon"/>
    </div>
  );
};

export default SliderContainer