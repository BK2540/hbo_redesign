import { Add, ArrowBackIos, ArrowDownwardRounded, Close, NearMe, Star, StarBorderOutlined } from '@mui/icons-material';
import './details.scss';

const Details = () => {

    
  return (
    <div className='details'>
        <div className="container">
            <ArrowBackIos className='back'/>
            <div className="video_container">
                <div className="icon">                    
                    <button className='normal_button'><Close/></button>
                    <button className='normal_button'><NearMe/></button>
                    <button className='normal_button'><ArrowDownwardRounded/></button>
                    <button className='normal_button'><Add/></button>
                </div>
                <video
                    className="video"
                    autoPlay
                    src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
                />
                <div className="custom_button">Watch Now</div>
            </div>
            <div className="video_content">
                <div className="v-header">
                    <div className="v-title">THE DARK KNIGHT</div>
                    <div className="rate">
                        <Star className='star'/>
                        <Star className='star'/>
                        <Star className='star'/>
                        <Star className='star'/>
                        <StarBorderOutlined className='star'/>
                        <span>| PG13</span><span>| 2HR 25M</span>
                    </div>
                </div>
                <div className="v-desc">
                    The sequel to Batman Begins gets bigger and badder with the introduction of the Joker, hauntingly portrayed by the late Heath Ledger.
                </div>
                <div className="genre">
                    <span className='genrelist'>Thiller</span>
                    <span className='genrelist'>Action</span>
                </div>

                <div className="casts">
                    <h3>Cast</h3>
                    <div className="cast_wrapper">
                    <div className="cast">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Christian_Bale_2009.jpg/1200px-Christian_Bale_2009.jpg" 
                        alt="image"
                        className='cast_img' />

                        <div className="c-name">
                            <span>Christian Bale</span>
                            <span className='act'>Bruce Wayne / Batman</span>
                        </div>
                    </div>

                    <div className="cast">
                        <img src="https://static.wikia.nocookie.net/kingsman-the-secret-service/images/7/79/5876-michael-caine.jpg" 
                        alt="image"
                        className='cast_img' />

                        <div className="c-name">
                            <span>Michael Caine</span>
                            <span className='act'>Alfred</span>
                        </div>
                    </div>

                    <div className="cast">
                        <img src="https://static.wikia.nocookie.net/batman/images/2/22/HeathLedger.jpg" 
                        alt="image"
                        className='cast_img' />

                        <div className="c-name">
                            <span>Heath Ledger</span>
                            <span className='act'>Joker</span>
                        </div>
                    </div>

                    <div className="cast">
                        <img src="https://cdn.britannica.com/08/155708-050-DC659537/Gary-Oldman.jpg" 
                        alt="image"
                        className='cast_img' />

                        <div className="c-name">
                            <span>Gary Oldman</span>
                            <span className='act'>Commissioner Gordon</span>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="more_list">
                    <h3>More Like This</h3>
                    <div className="more_wrapper">
                    <div className="more">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg" 
                        alt="image"
                        className='m_img' />

                        <div className="m-name">
                            <span>The Dark Knight Rise</span>
                        </div>
                    </div>

                    <div className="more">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg" 
                        alt="image"
                        className='m_img' />

                        <div className="m-name">
                            <span>The Dark Knight Rise</span>
                        </div>
                    </div>

                    <div className="more">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg" 
                        alt="image"
                        className='m_img' />

                        <div className="m-name">
                            <span>The Dark Knight Rise</span>
                        </div>
                    </div>

                    <div className="more">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg" 
                        alt="image"
                        className='m_img' />

                        <div className="m-name">
                            <span>The Dark Knight Rise</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <img src="https://cdn.vox-cdn.com/thumbor/K1WKyMb31K-K1vvseGAyFsjfYYE=/0x0:1200x675/1200x800/filters:focal(478x31:670x223)/cdn.vox-cdn.com/uploads/chorus_image/image/60384393/0_c9S8ajFBpwX89ZuU.0.jpeg" alt="bg" className='background'/>
            <div className="overlay"/>
        </div>
    </div>
  )
}

export default Details