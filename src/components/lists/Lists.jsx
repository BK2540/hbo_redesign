import { ArrowLeftRounded, ArrowRightRounded } from '@mui/icons-material';
import './lists.scss';
import ListItem from '../listItem/ListItem'
import { useRef, useState } from 'react';

const Lists = () => {

  const [isMoved, setIsMoved] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)
  const listRef = useRef()

  const handleClick = (direction) => {
      setIsMoved(true)
      let distance = listRef.current.getBoundingClientRect().x - 100
      if(direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
      if(direction === "right" && slideNumber < 4) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }


  }
  return (
    <div className='lists'>
      <div className="list_head">
        <span className='list_title'>Continue Watching</span>
        <span className='explore'>Explore more</span>
      </div>

      
      <div className="container">
      <ArrowLeftRounded 
      className='arrow left'
      onClick={() => handleClick("left")}
      style={{display: !isMoved && "none"}}
      />
      <div className="wrapper" ref={listRef}>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </div>       
        <ArrowRightRounded className='arrow right' onClick={() => handleClick("right")}/>
      </div>
     
    </div>
  )
}

export default Lists