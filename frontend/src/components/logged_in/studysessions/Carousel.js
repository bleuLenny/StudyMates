import React, {useState} from 'react'
import './Carousel.css'

import { images } from '../../Helpers/CarouselData'

function Carousel() {
    const [currGroup, setcurrGroup] = useState(0)
    return (
        <div className='carousel'>
            <div className='carousel-inner' style={{backgroundImage: `url(${images[currGroup].img})`}}>
                <div className='left'></div>
                <div className='center'></div>
                <div className='right'></div>
            </div>
        </div>
    )
};

export default Carousel
