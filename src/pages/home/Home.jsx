
import Features from '../../components/features/Features';
import Footer from '../../components/footer/Footer';
import Lists from '../../components/lists/Lists';
import Navbar from '../../components/navbar/Navbar';
import Trending from '../../components/trending/Trending';
import './home.scss';

const Home = ({type}) => {
  return (
    <div className='home'>
        <Navbar/>
        <Features type={type}/>
        <Trending/>
        <Lists/>
        <Lists/>
        <Lists/>
        <Lists/>
        <Footer/>
    </div>
  )
}

export default Home