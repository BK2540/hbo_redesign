import { ArrowBackIos, Star, StarBorderOutlined } from '@mui/icons-material';
import './watch.scss';
import { useNavigate } from 'react-router-dom';
import video from '../../assets/video.mp4';

const Watch = () => {

    const navigate = useNavigate()
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIos onClick={()=>navigate(-1)}/>
        </div>

        <div className="container">
            <div className="video_wrapper">
            <video
                className="video"
                autoPlay
                progress 
                controls
                src={video}
            />
            </div>

            <div className="video_content">
                <div className="info_main">
                    <h3>THE DARK KNIGHT</h3>
                    <div className="rate">
                        <Star className='star'/>
                        <Star className='star'/>
                        <Star className='star'/>
                        <Star className='star'/>
                        <StarBorderOutlined className='star'/>
                        <span>| PG13</span><span>| 2HR 25M</span>
                    </div>
                </div>

                <div className="genre">
                    <span className='genrelist'>Thiller</span>
                    <span className='genrelist'>Action</span>
                </div>

                <div className="desc">
                    <p>
                        The sequel to Batman Begins gets bigger and badder with the 
                        introduction of the Joker, 
                        hauntingly portrayed by the late 
                        Heath Ledger.
                    </p>
                </div>
                
            </div>
        </div>
        <img src="https://cdn.vox-cdn.com/thumbor/K1WKyMb31K-K1vvseGAyFsjfYYE=/0x0:1200x675/1200x800/filters:focal(478x31:670x223)/cdn.vox-cdn.com/uploads/chorus_image/image/60384393/0_c9S8ajFBpwX89ZuU.0.jpeg" alt="bg" className='background'/>
        <div className="overlay"/>
    </div>
  )
}

export default Watch