import React, {useState} from 'react'
import './Carousel.css';
import { images } from  '../Helpers/CarouselData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Carousel() {
    const [currGroup, setcurrGroup] = useState(0)
    return (
        <div className='carousel'>
            <div className='carousel-inner' style={{backgroundImage: `url(${images[currGroup].img})`}}>
                <div className='left' onClick={() => {currGroup > 0 && setcurrGroup(currGroup - 1)}}>
                    <ArrowBackIosIcon />
                </div>
                <div className='center'>
                    <h2>Study Group: {images[currGroup].groupname}</h2>
                    <h3>Class: {images[currGroup].groupclass}</h3>
                    <h3>Time: {images[currGroup].time}</h3>
                    <h3>Day: {images[currGroup].day}</h3>
                    <h3>Group Info: {images[currGroup].info}</h3>

                </div>
                <div className='right' onClick={() => {currGroup < images.length - 1 && setcurrGroup(currGroup + 1)}}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
        </div>
    )
};

export default Carousel
