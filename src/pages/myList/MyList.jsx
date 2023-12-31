import './myList.scss';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const MyList = () => {
  return (
    <>
    <Navbar/>
    <div className='mylist'>
        <div className="header">
            <div className="left_header">
            <h2>My List</h2>
            <span>|</span>
            <h2 className='cont'>Downloaded</h2>
            </div>
            
            <p className='edit'>Edit</p>
        </div>
        <div className="list_container">
          Nothing on your list
        </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default MyList