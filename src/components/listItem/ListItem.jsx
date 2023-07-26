import './listItem.scss'

const ListItem = () => {
  return (
    <div className='listItem'>
        <div className="item">
          <img src="https://d32qys9a6wm9no.cloudfront.net/images/movies/backdrop/f7/c68689cbe6e14fbf3dc6a69214dbd82a_706x397.jpeg" 
          alt="image"
          className='item_img' />

          <div className="title">
            <span>THE DARK KNIGHT</span>
          </div>
        </div>
    </div>
  )
}

export default ListItem